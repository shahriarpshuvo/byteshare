const { customRandom, urlAlphabet, random } = require('nanoid');

const File = require('../models/File');

const saveFile = async (req, res) => {
  const nanoid = customRandom(urlAlphabet, 10, random);
  if (!req.file) return res.status(400).json({ error: 'Upload must be valid.' });
  const { filename, path, size } = req.file;
  const file = await new File({
    filename,
    path,
    size,
    link: nanoid()
  }).save();
  res.status(200).json({ success: 'File uploaded Successfully', link: file.link });
};

const getFile = async (req, res) => {
  const file = await File.findOne({ link: req.params.link });
  if (!file) return res.status(404).json({ error: 'File not found' });
  res.status(200).json(file);
};

module.exports = { saveFile, getFile };
