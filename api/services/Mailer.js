const debug = require('debug')('app:mailer');
const mailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

const sendMail = async ({ from, to, subject, html }) => {
  const transporter = mailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  const info = await transporter.sendMail({ from: `ByteShare <${from}>`, to, subject, html });
  debug(info);
  return info;
};

module.exports = { sendMail };
