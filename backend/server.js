// Kirjaston tuonti ja instanssin luonti
const express = require('express');
const app = express();
const polku = require('path');

// bikes-kirjaston tuonti
const bikes = require('./bikes.js');

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

// Get bikes
app.get('/bikes', (req, res, next) => {
    res.send(bikes);
});

// Get bikes:id
app.get('/bikes/:id', (req, res, next) => {
    let id = req.params.id;
    let pyora = etsiIdlla(id);
    if (pyora == null) {
        res.status(404).send(`{"error": "bike not found with id ${id}"}`);
    } else {
        res.send(pyora);
    }
});

function etsiIdlla(id) {
    let bike = null;
    console.log('Etsitään id:llä '+id);
    bikes.forEach(pyora => {
        //console.log(pyora);
        if (pyora.id == id) {
            bike = pyora;
        }
    });
    return bike;
}