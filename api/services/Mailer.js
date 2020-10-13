const debug = require('debug')('app:mailer');
const mailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

const sendMail = async ({ from, to, subject, html }) => {
  const transporter = mailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  try {
    const info = await transporter.sendMail({ from: `byteShare <${from}>`, to, subject, html });
    debug(info);
    return info;
  } catch (error) {
    debug(error);
    throw new Error(error);
  }
};

module.exports = { sendMail };
