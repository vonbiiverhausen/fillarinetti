// Moduulien tuonto
const express = require('express');
const app = express();
const polku = require('path');
const sql = require('mysql');
//const ilmoitukset = require('../ilmoitukset.js');

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
app.use('/ilmoitukset', ilmoitusRouter);

// Lisää ilmoitus
ilmoitusRouter.post('/', (req, res, next) => {
    let ilmoitus = req.query;

    yhteys.query(`
    insert into ilmoitus (
        ilmJattaja,
        ilmJatetty,
        ilmTila,
        hinta,
        tyyppi,
        alatyyppi,
        merkki,
        rengas_koko,
        runko_koko,
        paikkakunta,
        kuva,
        kuvaus
    ) values (?, now(), 'Myynnissä', ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
        ilmoitus.username,
        ilmoitus.hinta,
        ilmoitus.tyyppi,
        ilmoitus.alatyyppi,
        ilmoitus.merkki,
        ilmoitus.rengaskoko,
        ilmoitus.rungonkoko,
        ilmoitus.paikkakunta,
        ilmoitus.kuva,
        ilmoitus.kuvaus
    ], (err, result, fields) => {
        if (err) {
            res.send({"virhe": err.message});
        } else {
            res.send({"viesti": "ilmoitus lisätty"});
        }
    });
});

// Selaa ilmoituksia (hae kaikki ilmoitukset)
ilmoitusRouter.get('/', (req, res, next) => {
    yhteys.query("select * from ilmoitus order by ilmJatetty desc", (err, result, fields) => {
        let lista = result;
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send(lista);
        }
    });
});

// Hae yksittäinen ilmoitus
ilmoitusRouter.get('/:id', (req, res, next) => {
    let id = req.params.id;
    yhteys.query("select * from ilmoitus where ilmId = ?", [id], (err, result, fields) => {
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send(result);
        }
    });
});

// Poista oma ilmoitus
ilmoitusRouter.delete('/:id', (req, res, next) => {
    let ilmId = req.params.id;
    yhteys.query("delete from ilmoitus where ilmId = ?", [ilmId], (err, result, fields) => {
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send({ "viesti": "ilmoitus "+ilmId+" poistettu" });
        }
    });
});

// Muokkaa ilmoitusta
ilmoitusRouter.put('/:id', (req, res, next) => {
    let ilmId = req.params.id;
    let tila = req.query;
    yhteys.query("update ilmoitus set ilmTila = ? where ilmId = ?", [tila.ilmTila, ilmId], (err, result, fields) => {
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send({ "viesti": "ilmoituksen "+ilmId+" tila muutettu", "uusitila": tila.ilmTila });
        }
    });
});

// Haku
ilmoitusRouter.get('/haku', (req, res, next) => {
    let ilmoitus = req.query;
    console.log(ilmoitus);
    let minHinta =  ilmoitus.min_hinta || 0;
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
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send(result);
        }
    });
});

module.exports = ilmoitusRouter;