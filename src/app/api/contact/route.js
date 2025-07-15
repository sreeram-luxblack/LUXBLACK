import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const {
    destination,
    fromDate,
    toDate,
    flexibleDates,
    name,
    email,
    phone,
    contactMode,
    bestTimeToReach,
    adults,
    children,
    roomType,
    departureCity,
    tripDuration,
    budget,
    mealPlan,
    flightsBooked,
    travelStyle,
  } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"LuxBlack Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: "sreeram@luxblackone.com",
      subject: `New Travel Inquiry from ${name}`,
      html: `
        <h2>New Travel Enquiry</h2>

        <h3>🌍 Travel Details</h3>
        <p><strong>Preferred Destination:</strong> ${destination}</p>
        <p><strong>Travel Dates:</strong> ${fromDate} to ${toDate}</p>
        <p><strong>Flexible Dates:</strong> ${flexibleDates}</p>
        <p><strong>Departure City:</strong> ${departureCity}</p>
        <p><strong>Trip Duration:</strong> ${tripDuration}</p>
        <p><strong>Estimated Budget (per person):</strong> ${budget}</p>
        <p><strong>Preferred Meal Plan:</strong> ${mealPlan}</p>
        <p><strong>Flights Booked:</strong> ${flightsBooked}</p>

        <h3>👤 Contact Information</h3>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Preferred Contact Mode:</strong> ${contactMode}</p>
        <p><strong>Best Time to Reach:</strong> ${bestTimeToReach}</p>

        <h3>👨‍👩‍👧‍👦 Group Information</h3>
        <p><strong>Adults:</strong> ${adults}</p>
        <p><strong>Children:</strong> ${children}</p>
        <p><strong>Room Type:</strong> ${roomType}</p>

        <h3>📝 Travel Style</h3>
        <p>${travelStyle ? travelStyle : "N/A"}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Email failed to send." }),
      { status: 500 }
    );
  }
}
