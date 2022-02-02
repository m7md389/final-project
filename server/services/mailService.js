const nodemailer = require("nodemailer");
require("dotenv").config();

const CLIENT_URI = "localhost:3000";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  }
});

const sendMail = (to, subject, text, html) => {
  const message = { from: process.env.AUTH_EMAIL, to, subject, text, html };
  transporter.sendMail(message, (ex, info) => {
    if (ex) return console.log(ex);
    return "Email sent: " + info.response;
  });
};

const sendVerificationEmail = (req, user, emailToken) => {
  const mailSubject = "Cofirm Your Account";
  console.log(process.env);
  const verificationLink = `http://${CLIENT_URI}/verify-user?emailToken=${emailToken}`;
  const mailText = `
    Hello ${user.name},

    Glad to have you on board.

    Please confirm your email address by clicking the link below:

    ${verificationLink}
    `;
  const mailHTML = `
  <h1>Hello ${user.name},</h1>
  <p>Glad to have you on board.</p>
  <p>Please confirm your email address by clicking the link below:</p>
  <a href=${verificationLink}>Verify your account</a>
  `;

  const result = sendMail(user.email, mailSubject, mailText, mailHTML);

  return { result };
};

const sendNotificationEmail = (userEmail) => {};

module.exports = { sendMail, sendVerificationEmail, sendNotificationEmail };
