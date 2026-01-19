// // --- START OF FILE server/utils/sendEmail.js ---
// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   // 1. Create the transporter with your Gmail credentials
//   // --- START OF FILE server/utils/sendEmail.js ---
// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   // 1. Create the transporter with your Gmail credentials
//   const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: true, // MUST be true for port 465
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
//   connectionTimeout: 20000,
//   greetingTimeout: 20000,
//   socketTimeout: 20000
// });


//   // 2. Define the email layout
//   const message = {
//     from: process.env.EMAIL_FROM,
//     to: options.email,
//     subject: options.subject,
//     text: options.message, // Plain text fallback
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
//         <h2 style="color: #007bff; text-align: center;">Volunteer Verification</h2>
//         <p>Hello,</p>
//         <p>Thank you for registering to help. To verify your email address, please use the following One-Time Password (OTP):</p>
        
//         <div style="background-color: #f4f4f4; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
//           <h1 style="letter-spacing: 5px; color: #333; margin: 0;">${options.otp}</h1>
//         </div>

//         <p>This code is valid for <strong>5 minutes</strong>.</p>
//         <p style="color: #888; font-size: 12px; text-align: center; margin-top: 30px;">Disaster Management Portal Team</p>
//       </div>
//     `,
//   };

//   // 3. Send the email
//   await transporter.sendMail(message);
// };

// module.exports = sendEmail;


//   // 2. Define the email layout
//   const message = {
//     from: process.env.EMAIL_FROM,
//     to: options.email,
//     subject: options.subject,
//     text: options.message, // Plain text fallback
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
//         <h2 style="color: #007bff; text-align: center;">Volunteer Verification</h2>
//         <p>Hello,</p>
//         <p>Thank you for registering to help. To verify your email address, please use the following One-Time Password (OTP):</p>
        
//         <div style="background-color: #f4f4f4; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
//           <h1 style="letter-spacing: 5px; color: #333; margin: 0;">${options.otp}</h1>
//         </div>

//         <p>This code is valid for <strong>5 minutes</strong>.</p>
//         <p style="color: #888; font-size: 12px; text-align: center; margin-top: 30px;">Disaster Management Portal Team</p>
//       </div>
//     `,
//   };

//   // 3. Send the email
//   await transporter.sendMail(message);
// };

// module.exports = sendEmail;

const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
    });

    // Email content
    const message = {
      from: process.env.EMAIL_FROM,
      to: options.email,
      subject: options.subject,
      text: options.message || `Your OTP is: ${options.otp}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background: #f9f9f9;">
          <h2 style="text-align:center;color:#e63946;">Disaster Management Portal</h2>
          <p>Hello,</p>
          <p>Your One-Time Password (OTP) is:</p>
          <div style="text-align:center;margin:20px 0;">
            <h1 style="letter-spacing:5px;">${options.otp}</h1>
          </div>
          <p>This code expires in <strong>5 minutes</strong>.</p>
          <p style="font-size:12px;color:#888;text-align:center;margin-top:30px;">
            If you did not request this, please ignore this email.
          </p>
        </div>
      `,
    };

    // Send mail
    await transporter.sendMail(message);

    console.log("✅ OTP email sent to:", options.email);
  } catch (error) {
    console.error("❌ sendEmail error:", error);
    throw error;
  }
};

module.exports = sendEmail;

