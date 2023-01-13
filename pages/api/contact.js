require("dotenv").config();
export default function (req, res) {
  const nodemailer = require("nodemailer");
  const PASSWORD = process.env.password;
  const EMAIL = process.env.email;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "Gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailData = {
    from: "tp08228@gmail.com",
    to: "dan.phillips100@gmail.com",
    subject: `Portfolio: message from ${req.body.name}`,
    text: req.body.message,
    html: `<div>Sender: ${req.body.email}, ${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (("error", err)) console.log(err);
  });

  res.status(200).end();
}
