const pool = require('../config/db')
const nodemailer = require('nodemailer')

// ✅ UPDATED: Hostinger SMTP config (removed Gmail)
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: Number(process.env.EMAIL_PORT),
//   secure: true, // for port 465
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// })
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Adding these ensures the server doesn't wait forever
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 5000,
  socketTimeout: 15000,
})

// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body

//     // Save to DB
//     const result = await pool.query(
//       'INSERT INTO contacts (name,email,message) VALUES ($1,$2,$3) RETURNING *',
//       [name, email, message]
//     )

//     // Send Email Notification
//     await transporter.sendMail({
//       from: `"Anii Photography" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: '📩 Booking Enquiry',
//       html: `
//         <h2>New Enquiry Received</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     })

//     res.status(201).json({
//       success: true,
//       data: result.rows[0],
//     })

//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ message: 'Failed to submit enquiry' })
//   }
// }
// TEMP DEBUG VERSION
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message, phone, eventType } = req.body

//     console.log("BODY:", req.body)

//     const result = await pool.query(
//       `INSERT INTO contacts (name, email, message, phone, event_type) 
//        VALUES ($1, $2, $3, $4, $5) 
//        RETURNING *`,
//       [name, email, message, phone, eventType] // ✅ FIXED
//     )

//     console.log("DB INSERT SUCCESS")

//     try {
//       await transporter.sendMail({
//         from: `"Anii Photography" <${process.env.EMAIL_USER}>`,
//         to: process.env.EMAIL_USER,
//         subject: '📩 Booking Enquiry',
//         html: `
//           <h2>New Booking Request</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Event Type:</strong> ${eventType}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         `,
//       })
//       console.log("EMAIL SENT")
//     } catch (emailErr) {
//       console.error("EMAIL ERROR:", emailErr)
//     }

//     res.status(201).json({
//       success: true,
//       data: result.rows[0],
//     })

//   } catch (err) {
//     console.error("MAIN ERROR:", err)
//     res.status(500).json({ message: 'Failed to submit enquiry' })
//   }
// }
exports.createContact = async (req, res) => {
  try {
    const { name, email, message, phone, eventType } = req.body
    console.log("BODY:", req.body)

    // 1. Save to DB (We 'await' this because it's critical)
    const result = await pool.query(
      `INSERT INTO contacts (name, email, message, phone, event_type) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [name, email, message, phone, eventType]
    )
    console.log("DB INSERT SUCCESS")

    // 2. ✅ FIXED: FIRE AND FORGET (Removed 'await')
    // We do NOT 'await' this so the user gets a response immediately
    transporter.sendMail({
      from: `"Anii Photography" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '📩 Booking Enquiry',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }).then(() => {
      console.log("EMAIL SENT SUCCESSFULLY")
    }).catch((emailErr) => {
      // This will log in your Render console but won't stop the website
      console.error("EMAIL BACKGROUND ERROR:", emailErr.message)
    })

    // 3. Respond to frontend IMMEDIATELY after DB success
    return res.status(201).json({
      success: true,
      data: result.rows[0],
    })

  } catch (err) {
    console.error("MAIN ERROR:", err)
    return res.status(500).json({ message: 'Failed to submit enquiry' })
  }
}