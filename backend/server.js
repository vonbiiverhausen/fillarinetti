// Kirjaston tuonti ja instanssin luonti
const express = require('express');
const app = express();
const polku = require('path');

// bikes-kirjaston tuonti
const ilmoitukset = require('./ilmoitukset.js');

// Portin määritys
const portti = process.env.Port || 4001;

// Käynnistetään palvelin
app.listen(portti, () => {
    console.log(`Palvelin kuuntelee porttia ${portti}`);
});

// Perus-get
app.get('/', (req, res, next) => {
    res.sendFile(polku.join(__dirname+'/testisivu.html'));
});

// Get ilmoitukset
app.get('/ilmoitukset', (req, res, next) => {
    res.send(ilmoitukset);
});

// Get ilmoitus:id
app.get('/ilmoitus/:id', (req, res, next) => {
    let id = req.params.id;
    let ilmoitus = etsiIdlla(id);
    if (ilmoitus) {
        res.send(ilmoitus);
    } else {
        res.status(404).send(`{"virhe": "ilmoitusta ei löytynyt id:llä  ${id}"}`);
    }
});

function etsiIdlla(id) {
    let ilmoitus = null;
    ilmoitukset.forEach(ilm => {
        if (ilm.id == id) {
            ilmoitus = ilm;
        }
    });
    return ilmoitus;
}