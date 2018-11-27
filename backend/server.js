// Kirjaston tuonti ja instanssin luonti
const express = require('express');
const app = express();
const polku = require('path');

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

app.use('/ilmoitukset', ilmoitusRouter);
app.use('/kayttaja', kayttajaRouter);

// Perus-get
app.get('/', (req, res, next) => {
    res.sendFile(polku.join(__dirname+'/testisivu.html'));
});
