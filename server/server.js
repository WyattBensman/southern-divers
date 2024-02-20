const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Route to handle form submissions
app.post("/api/form-submit", (req, res) => {
  console.log(req.body);
  const { name, phoneNumber, companyName, email, jobType, helpText } = req.body;

  // Construct email message
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
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

// Serve the React app static files
app.use(express.static(path.join(__dirname, "../client/dist")));

// Catch-all route to serve the main HTML file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
