const File = require('../models/File');

const downloadFile = async (req, res) => {
  const file = await File.findOne({ link: req.params.link });
  if (!file) return res.status(404).json({ error: 'File not found' });
  const filePath = `${__dirname}/../${file.path}`;
  res.status(200).download(filePath);
};

module.exports = { downloadFile };
