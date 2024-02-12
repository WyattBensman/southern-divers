const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "southerndiversllc@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "xqwi omml vbub loah",
  },
});

// Route to handle form submissions
app.post("/api/form-submit", (req, res) => {
  console.log(req.body);
  const { name, phoneNumber, companyName, email, jobType, helpText } = req.body;

  // Construct email message
  const mailOptions = {
    from: "southerndiversllc@gmail.com",
    to: "southerndiversllc@gmail.com",
    subject: `${companyName} - New Project Request`,
    html: `
      <p>Name: ${name}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Company Name: ${companyName}</p>
      <p>Email Address: ${email}</p>
      <p>Job Type: ${jobType}</p>
      <p>How Can We Help?: ${helpText}</p>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
