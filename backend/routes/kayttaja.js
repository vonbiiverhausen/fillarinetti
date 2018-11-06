const express = require('express');
const app = express();

// Käyttäjä-Router
const kayttajaRouter = express.Router();
app.use('/kayttaja', kayttajaRouter);

// Luo käyttäjätunnus / rekisteröi
kayttajaRouter.post('/', (req, res, next) => {
    res.send('{"viesti": "Käyttäjä luotu"}');
});

// Katso omia tietoja
kayttajaRouter.get('/:id', (req, res, next) => {
    res.send('{"tiedot": "tähän"}');
});

// Muokkaa omia tietoja
kayttajaRouter.put('/:id', (req, res, next) => {
    res.send('{"viesti": "Käyttäjätiedot muutettu"}');
});

// Poista oma tili
kayttajaRouter.delete('/:id', (req, res, next) => {
    res.send('{"viesti": "Käyttäjä poistettu"}');
});

// Vaihda salasana (onko omien tietojen muokkaus?)

module.exports = kayttajaRouter;