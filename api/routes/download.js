const router = require('express').Router();
const File = require('../models/file');

router.get('/:shortLink', async (req, res) => {
  const file = await File.findOne({ shortLink: req.params.shortLink });
  if (!file) return res.status(404).json({ error: 'File not found' });
  res.status(200).json(file);
});

router.get('/download/:shortLink', async (req, res) => {
  const file = await File.findOne({ shortLink: req.params.shortLink });
  if (!file) return res.status(404).json({ error: 'File not found' });
  const filePath = `${__dirname}/../${file.path}`;
  res.status(200).download(filePath);
});

module.exports = router;
