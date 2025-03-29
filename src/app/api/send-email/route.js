import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Get the email from the request body
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    // Create Mailtrap transport using nodemailer
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "api", // Mailtrap user
        pass: "0b46a9aecd846cfdaa9201969cad7868", // Mailtrap pass
      },
    });

    // Send email using Mailtrap
    const info = await transporter.sendMail({
      from: '"Ward 13 Admin" <hello@demomailtrap.co>', // Sender address
      to: email, // Recipient
      subject: "Email Verification",
      text: "Please verify your email by clicking the link below.",
      html: `<p>Please verify your email by clicking <a href="http://localhost:3000/verify?email=${email}">here</a>.</p>`,
    });

    console.log("Message sent: %s", info.messageId);

    // Successful response
    return new Response(JSON.stringify({ success: true, message: "Verification email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
