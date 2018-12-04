// Moduulien tuonti
const express = require('express');
const app = express();
const sql = require('mysql');
const formidable = require('formidable');
const path = require('path');

const yhteys = sql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "fillarinetti"
    }
);

// Routerin luonti
const ilmoitusRouter = express.Router();
app.use('/api/ilmoitukset', ilmoitusRouter);

// Lisää ilmoitus
ilmoitusRouter.post('/', (req, res, next) => {
    // Tallennetaan kuva
    let form = new formidable.IncomingForm();
    let kuva;

    form.parse(req, function (err, fields, files) {
        var { username, hinta, tyyppi, alatyyppi, merkki, rengaskoko, rungonkoko, paikkakunta, kuvaus } = fields;
        //console.log(kuva);

        yhteys.query(`
    insert into ilmoitus (ilmJattaja, ilmJatetty, ilmTila, hinta, tyyppi, alatyyppi, merkki, rengas_koko, runko_koko, paikkakunta, kuva, kuvaus) values (?, now(), 'Myynnissä', ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                username,
                hinta,
                tyyppi,
                alatyyppi,
                merkki,
                rengaskoko,
                rungonkoko,
                paikkakunta,
                kuva,
                kuvaus
            ], (err, result, fields) => {
                if (err) {
                    console.log(err.message);
                    res.send({ "virhe": err.message });
                } else {
                    res.send({ "viesti": "ilmoitus lisätty" });
                }
            });

    });

    form.on('fileBegin', (name, file) => {
        file.path = path.join(__dirname, '../public/images/' + file.name);
        kuva = file.name;
    });
});

// Selaa ilmoituksia (hae kaikki ilmoitukset)
ilmoitusRouter.get('/', (req, res, next) => {
    yhteys.query("select * from ilmoitus order by ilmJatetty desc", (err, result, fields) => {
        let lista = result;
        if (err) {
            res.send({ "virhe": err.message });
        } else {
            res.send(lista);
        }
    });
});

// Hae yksittäinen ilmoitus
ilmoitusRouter.get('/:id', (req, res, next) => {
    let id = req.params.id;
    yhteys.query("select * from ilmoitus where ilmId = ?", [id], (err, result, fields) => {
        if (err) {
            res.send({ "virhe": err.message });
        } else {
            res.send(result);
        }
    });
});

// Poista oma ilmoitus
ilmoitusRouter.delete('/:id', (req, res, next) => {
    let ilmId = req.params.id;
    yhteys.query("delete from ilmoitus where ilmId = ?", [ilmId], (err, result, fields) => {
        if (err) {
            res.send({ "virhe": err.message });
        } else {
            res.send({ "viesti": "ilmoitus " + ilmId + " poistettu" });
        }
    });
});

// Muokkaa ilmoitusta
ilmoitusRouter.put('/:id', (req, res, next) => {
    let ilmId = req.params.id;
    let tila = req.query;
    yhteys.query("update ilmoitus set ilmTila = ? where ilmId = ?", [tila.ilmTila, ilmId], (err, result, fields) => {
        if (err) {
            res.send({ "virhe": err.message });
        } else {
            res.send({ "viesti": "ilmoituksen " + ilmId + " tila muutettu", "uusitila": tila.ilmTila });
        }
    });
});

// Haku
ilmoitusRouter.get('/haku', (req, res, next) => {
    let ilmoitus = req.query;
    console.log(ilmoitus);
    let minHinta = ilmoitus.min_hinta || 0;
    let maxHinta = ilmoitus.min_hinta || 99999;
    let tyyppi = ilmoitus.tyyppi || '%';
    let alatyyppi = ilmoitus.alatyyppi || '%';
    let merkki = ilmoitus.merkki || '%';
    // let rengaskoko = ilmoitus.rengaskoko;
    // let rungonkoko = ilmoitus.rungonkoko;
    let paikkakunta = ilmoitus.paikkakunta || '%';

    yhteys.query(`
    select * from ilmoitus where 
    hinta between ? and ? and
    tyyppi like ? and 
    alatyyppi like ? and
    merkki like ? and
    paikkakunta like ?`, [minHinta, maxHinta, tyyppi, alatyyppi, merkki, paikkakunta], (err, result, fields) => {
            if (err) {
                res.send({ "virhe": err.message });
            } else {
                res.send(result);
            }
        });
});

module.exports = ilmoitusRouter;