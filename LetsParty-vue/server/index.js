import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3000)
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
const smtpPort = Number(process.env.SMTP_PORT || 587)
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS
const destinationEmail = 'dfaulk0001@gmail.com'

if (!smtpUser || !smtpPass) {
  console.error('Missing SMTP_USER or SMTP_PASS environment variables.')
  process.exit(1)
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
})

app.use(cors())
app.use(express.json({ limit: '1mb' }))

app.post('/api/contact', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    eventDate,
    street,
    city,
    state,
    zip,
    themeIdeas,
    eventType,
    inspoFiles,
    areaFiles,
  } = req.body

  if (!fullName || !email || !eventDate) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name, email, and event date.',
    })
  }

  const fileListToText = (list) =>
    Array.isArray(list) && list.length ? list.join(', ') : 'No files attached'

  const messageText = `New contact request from ${fullName}

Email: ${email}
Phone: ${phone || 'N/A'}
Event date: ${eventDate}
Location type: ${eventType}

Address:
${street || 'N/A'}
${city || 'N/A'}, ${state || 'N/A'} ${zip || 'N/A'}

Theme / vision:
${themeIdeas || 'N/A'}

Inspiration files:
${fileListToText(inspoFiles)}

Area files:
${fileListToText(areaFiles)}
`

  const htmlBody = `
    <h1>New contact request</h1>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    <p><strong>Event date:</strong> ${eventDate}</p>
    <p><strong>Event location:</strong> ${eventType}</p>
    <p><strong>Address:</strong> ${street || 'N/A'}<br />${city || 'N/A'}, ${state || 'N/A'} ${zip || 'N/A'}</p>
    <p><strong>Theme or vision:</strong><br />${themeIdeas || 'N/A'}</p>
    <p><strong>Inspiration files:</strong> ${fileListToText(inspoFiles)}</p>
    <p><strong>Area files:</strong> ${fileListToText(areaFiles)}</p>
  `

  try {
    await transporter.sendMail({
      from: `"Let’s Party Contact Form" <${smtpUser}>`,
      replyTo: email,
      to: destinationEmail,
      subject: `New contact request from ${fullName}`,
      text: messageText,
      html: htmlBody,
    })

    res.json({ success: true })
  } catch (error) {
    console.error('Failed to send email:', error)
    res.status(500).json({
      success: false,
      message: 'Unable to send your request right now. Please try again later.',
    })
  }
})

app.listen(port, () => {
  console.log(`Contact email service listening on http://localhost:${port}`)
})
