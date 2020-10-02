const express = require('express');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to byteShare Api.');
});

app.get('/api/test', (req, res) => {
  res.status(200).send({ message: 'Congrats! Connected to Server.' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port} 🔥`));
