// src/app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const {
    name,
    city,
    email,
    phone,
    whatsapp,
    destination,
    dates,
    people,
    vacationType,
  } = body;

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
      subject: `New Travel Inquiry from ${name}`,
      html: `
        <h2>New Travel Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>City of Residence:</strong> ${city}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'N/A'}</p>
        <p><strong>Travel Destination:</strong> ${destination}</p>
        <p><strong>Travel Dates:</strong> ${dates}</p>
        <p><strong>No. of People:</strong> ${people}</p>
        <p><strong>Vacation Type:</strong> ${vacationType}</p>
      `,
    });

    return Response.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Email failed to send.' }),
      { status: 500 }
    );
  }
}
