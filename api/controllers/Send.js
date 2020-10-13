const File = require('../models/File');
const Mailer = require('../services/Mailer');
const template = require('../services/MailTemplate');

const send = async (req, res) => {
  const { link, mailTo, mailFrom } = req.body;
  if (!link || !mailTo || !mailFrom) return res.status(422).json({ error: 'All Fields are required.' });
  const file = await File.findOne({ link });
  if (!file) return res.status(404).json({ error: "File doesn't exist or Link has been expired." });
  if (file.sender && file.receiver === mailTo) return res.status(400).json({ error: 'File has been sent already.' });

  const { CLIENT_URL, LOGO_URL } = process.env;

  function getFileSize(fileSize) {
    const fileSizeKB = Math.round(fileSize / 1024);
    if (fileSizeKB < 1000) return `${fileSizeKB} KB`;
    else {
      const fileSizeMB = fileSizeKB / 1000;
      return `${fileSizeMB} MB`;
    }
  }

  function getFileValidity(createdAt) {
    const hrs = 60 * 60 * 1000;
    const day = 24 * hrs;
    const validity = new Date(createdAt.getTime() + day);
    let leftHrs = parseInt(((validity - Date.now()) / hrs).toFixed(2));
    if (leftHrs < 0) return 'Expired!';
    if (leftHrs === 0) return 'Less Than 1 Hr Left';
    return `${leftHrs} Hrs Left`;
  }

  const fileSize = getFileSize(file.size);
  const fileValidity = getFileValidity(file.createdAt);

  try {
    Mailer.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `byteShare - You've received a file from ${mailFrom}`,
      html: template({
        clientUrl: CLIENT_URL,
        logoUrl: LOGO_URL,
        fileSize,
        fileValidity,
        downloadUrl: `${CLIENT_URL}/files/${file.link}`,
        mailFrom
      })
    });

    await File.updateOne({ link }, { $set: { sender: mailFrom, receiver: mailTo } });
    res.status(200).json({ success: 'Email has been sent successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { send };
