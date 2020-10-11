const File = require('../models/File');
const Mailer = require('../services/Mailer');
const template = require('../services/MailTemplate');

const send = async (req, res) => {
  const { link, mailTo, mailFrom } = req.body;
  if (!link || !mailTo || !mailFrom) return res.status(422).json({ error: 'All Fields are required.' });
  const file = await File.findOne({ link });
  if (!file) return res.status(404).json({ error: "File doesn't exist or Link has been expired." });
  if (file.sender && file.receiver === mailTo) return res.status(400).json({ error: 'File has been sent already.' });

  const { PUBLIC_URL, CLIENT_URL, LOGO_URL } = process.env;
  const fileValidity = file.createdAt.toLocaleString();

  Mailer.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `byteShare - You've received a file from ${mailFrom}`,
    html: template({
      clientUrl: CLIENT_URL,
      logoUrl: LOGO_URL,
      fileSize: file.size,
      fileValidity,
      downloadUrl: `${PUBLIC_URL}/download/${file.link}`,
      mailFrom
    })
  });

  await File.updateOne({ link }, { $set: { sender: mailFrom, receiver: mailTo } });
  res.status(200).json({ success: 'Email has been sent successfully.' });
};

module.exports = { send };
