const express = require('express');
const app = express();
const polku = require('path');

// ilmoitukset-kirjaston tuonti
const ilmoitukset = require('../ilmoitukset.js');

// Routerin luonti
const ilmoitusRouter = express.Router();
app.use('/ilmoitukset', ilmoitusRouter);

// Lisää ilmoitus
ilmoitusRouter.post('/', (req, res, next) => {
    res.send({"viesti": "Ilmoitus lisätty"});
});

// Selaa ilmoituksia (hae kaikki ilmoitukset)
ilmoitusRouter.get('/', (req, res, next) => {
    res.send(ilmoitukset);
});

// Hae omat ilmoitukset

// Hae yksittäinen ilmoitus
ilmoitusRouter.get('/:id', (req, res, next) => {
    let id = req.params.id;
    let ilmoitus = etsiIdlla(id);
    if (ilmoitus) {
        res.send(ilmoitus);
    } else {
        res.status(404).send({"virhe": "ilmoitusta ei löytynyt id:llä  "+id+""});
    }
});

// Poista oma ilmoitus
ilmoitusRouter.delete('/:id', (req, res, next) => {
    res.send({"viesti": "Ilmoitus poistettu"});
});

// Muokkaa ilmoitusta (laitetaanko?)


// Funktiot
function etsiIdlla(id) {
    let ilmoitus = null;
    ilmoitukset.forEach(ilm => {
        if (ilm.id == id) {
            ilmoitus = ilm;
        }
    });
    return ilmoitus;
}

module.exports = ilmoitusRouter;