const nodemailer = require('nodemailer');
const fs = require("fs");
const handlebars = require("handlebars");

const sendEmail = async ({email, subject}, htmlTemplatePath, fieldsToReplaceInHtml) => {
    const htmlTemplate = fs.readFileSync(htmlTemplatePath, {encoding: 'utf-8'});
    const handlebarsHtmlTemplate = handlebars.compile(htmlTemplate);
    const htmlToSend = handlebarsHtmlTemplate(fieldsToReplaceInHtml);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: email,
        subject: subject,
        html: htmlToSend
    };

    const info = await transporter.sendMail(message);

    console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
