const nodemailer = require("nodemailer");
const path = require("path");
const config = require(path.resolve("config.json"));

let transporter = nodemailer.createTransport(config.mailer);

module.exports = transporter;
