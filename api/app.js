require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

// Database Connection
const db = require('./config/db');
db.connectDatabase();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome to byteShare Api.');
});

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/download'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`🔥 Server running on http://localhost:${port}`));
