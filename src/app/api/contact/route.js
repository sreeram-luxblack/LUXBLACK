// src/app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, destination, dates, notes } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"LuxBlack Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: 'siddhantvats840@gmail.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Destination:</strong> ${destination}</p>
        <p><strong>Travel Dates:</strong> ${dates}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `,
    });

    return Response.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Email failed to send.' }), {
      status: 500,
    });
  }
}
