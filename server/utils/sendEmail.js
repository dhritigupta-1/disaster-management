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

// const axios = require("axios");

// const sendEmail = async (options) => {
//   try {
//     await axios.post(
//       "https://api.brevo.com/v3/smtp/email",
//       {
//         sender: {
//           name: "Disaster Management Portal",
//           email: process.env.EMAIL_FROM
//         },
//         to: [
//           {
//             email: options.email
//           }
//         ],
//         subject: options.subject,
//         htmlContent: `
//           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
//             <h2 style="color: #007bff; text-align: center;">Verification Code</h2>
//             <p>Hello,</p>
//             <p>Your OTP code is:</p>
            
//             <div style="background-color: #f4f4f4; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
//               <h1 style="letter-spacing: 5px; color: #333; margin: 0;">${options.otp}</h1>
//             </div>

//             <p>This code is valid for <strong>5 minutes</strong>.</p>
//             <p style="color: #888; font-size: 12px; text-align: center; margin-top: 30px;">
//               Disaster Management Portal Team
//             </p>
//           </div>
//         `
//       },
//       {
//         headers: {
//           "api-key": process.env.BREVO_API_KEY,
//           "Content-Type": "application/json"
//         }
//       }
//     );
//   } catch (err) {
//     console.error("Email send failed:", err.response?.data || err.message);
//     throw err;
//   }
// };

// module.exports = sendEmail;

const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1. Create transporter using SMTP env variables
  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

  // 2. Define email content
  const message = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #007bff; text-align: center;">Volunteer Verification</h2>
        <p>Hello,</p>
        <p>Thank you for registering to help. To verify your email address, use the OTP below:</p>
        
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0;">
          <h1 style="letter-spacing: 5px; color: #333; margin: 0;">${options.otp}</h1>
        </div>

        <p>This code is valid for <strong>5 minutes</strong>.</p>
        <p style="color: #888; font-size: 12px; text-align: center; margin-top: 30px;">
          Disaster Management Portal Team
        </p>
      </div>
    `,
  };

  // 3. Send email
  try {
  await transporter.verify();
  console.log("SMTP READY");
} catch (err) {
  console.error("SMTP ERROR:", err);
  throw err;
}
};

module.exports = sendEmail;
