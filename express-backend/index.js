const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const jsonPath = require('jsonpath');
const lodash = require('lodash');

const app = express();
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:5173'],
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

// Les catégories que l'on souhaite récupérer
const usableCategories = ['blank-o-matic', 'extraExtra', 'subTheTitle', 'surveySays'];

// Permet de récupérer les catégories du jeu Use Your Word
app.get('/categories', (req, res) => {
  // TODO: améliorer le processus de lecture du fichier JSON (pas à chaque appel ?)
  fs.readFile('public/assets/Manifest_Addon-resources.assets-290.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    // On récupère les catégories et le contenu du JSON
    const categories = jsonPath.query(jsonData, '$.packages.0')[0];
    // On récupère uniquement le nom des catégories que l'on souhaite traiter
    const workingCategories = lodash.keys(lodash.pick(categories, usableCategories));
    console.log(workingCategories);
    res.send(workingCategories);
  });
});

// Récupère les données d'une catégorie
app.get('/categories/:name', (req, res) => {
  fs.readFile('public/assets/Manifest_Addon-resources.assets-290.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    // On récupère la racine du JSON où se trouve les données
    const root = jsonPath.query(jsonData, '$.packages.0');
    // On accède à la données via l'utilisation de bracket pour éviter les problèmes avec les clés qui ont des traits d'union
    const categories = root[0][req.params.name];
    console.log(categories);
    res.send(categories);
  });
});

// Mettre à jour une question d'une catégorie
app.put('/categories/:name/:id', (req, res) => {
  console.log('req');
  console.log(req);
  console.log('req.params');
  console.log(req.params);
  console.log('res');
  console.log(res);
});

// Permet de récupérer le JSON du jeu Use Your Word
// TODO: à ne plus utiliser, on va récupérer les catégories puis les questions de la catégorie choisie
app.get('/manifest', (req, res) => {
  fs.readFile('public/assets/Manifest_Addon-resources.assets-290.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Permet de mettre à jour le JSON du jeu Use Your Word
// TODO: ancien, à ne plus utiliser, on va mettre à jour les données unitairement par catégorie et par question
app.post('/manifest', (req, res) => {
  let data = req.body;

  fs.writeFile('public/assets/Manifest_Addon-resources.assets-290.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    res.send('Saved !');
  });
});

