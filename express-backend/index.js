const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json({limit: '50mb'}));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Permet de récupérer le JSON du jeu Use Your Word
app.get('/manifest', (req, res) => {
  fs.readFile('public/assets/Manifest_Addon-resources.assets-290.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Permet de mettre à jour le JSON du jeu Use Your Word
app.post('/manifest', (req, res) => {
  let data = req.body;

  fs.writeFile('public/assets/Manifest_Addon-resources.assets-290.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

});

