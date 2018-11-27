// Kirjaston tuonti ja instanssin luonti
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// index
app.use(express.static('public'));
app.get('/', (req, res, next) => {
    res.redirect('\index.html');
});

// ilmoitukset-kirjaston tuonti
const ilmoitukset = require('./ilmoitukset.js');

// Portin määritys
const portti = process.env.Port || 4001;

// Käynnistetään palvelin
app.listen(portti, () => {
    console.log(`Palvelin kuuntelee porttia ${portti}`);
});

// Routes
const ilmoitusRouter = require('./routes/ilmoitus.js');
const kayttajaRouter = require('./routes/kayttaja.js');

app.use('/api/ilmoitukset', ilmoitusRouter);
app.use('/api/kayttaja', kayttajaRouter);
