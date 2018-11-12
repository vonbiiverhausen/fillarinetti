const express = require('express');
const app = express();
const sql = require('mysql');

// Tietokantayhteys
const yhteys = sql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "fillarinetti"
    }
);

// Käyttäjä-Router
const kayttajaRouter = express.Router();
app.use('/kayttaja', kayttajaRouter);

// Luo käyttäjätunnus / rekisteröi
kayttajaRouter.post('/', (req, res, next) => {
    let user = req.query;
    yhteys.query("insert into kayttaja values (?, ?, ?, ?, now(), now())", [user.username, user.password, user.sposti, user.puhnro] , (err, result, fields) => {
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send({"viesti": "Käyttäjä "+user.username+" lisätty"});
        }
    });
});

// Listaa kaikki käyttäjät
kayttajaRouter.get('/', (req, res, next) => {
    yhteys.query("select username, tunnusluotu from kayttaja", (err, result, fields) => {
        let lista = result;
        //console.log(lista);
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send(lista);
        }
    });
});

// Katso käyttäjän tietoja
kayttajaRouter.get('/:username', (req, res, next) => {
    // Haetaan kaikki 
    let kayttajaTunnus = req.params.username;
    yhteys.query("select * from kayttaja where username = ?", [kayttajaTunnus], (err, result, fields) => {
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send(result[0]);
        }
    });
});

// Listaa käyttäjän ilmoitukset
kayttajaRouter.get('/:username/ilmoitukset', (req, res, next) => {
    // Haetaan kaikki 
    let kayttajaTunnus = req.params.username;
    yhteys.query(`select ilmId as 'Ilmoituksen id', ilmJatetty as 'Ilmoitus jätetty', ilmTila as 'Ilmoituksen tila', hinta as 'Hinta' from ilmoitus 
    JOIN kayttaja
    on ilmoitus.ilmJattaja = kayttaja.username
    where kayttaja.username = ?`, [kayttajaTunnus], (err, result, fields) => {
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send(result);
        }
    });
});

// Muokkaa omia tietoja
kayttajaRouter.put('/:username', (req, res, next) => {
    let kayttajaTunnus = req.params.username;
    let user = req.query;

    yhteys.query("update kayttaja set sposti = ?, puhnro = ? where username = ?", [user.sposti, user.puhnro, kayttajaTunnus], (err, result, fields) => {
        console.log(result);
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send({ "viesti": "Käyttäjätiedot muutettu" });
        }
    });
});

// Poista oma tili
kayttajaRouter.delete('/:username', (req, res, next) => {
    let kayttajatunnus = req.params.username;
    yhteys.query("delete from kayttaja where username = ?", [kayttajatunnus], (err, result, fields) => {
        console.log(result);
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send({ "viesti": "Käyttäjä poistettu" });
        }
    });
});

// Vaihda salasana (onko omien tietojen muokkaus?)
kayttajaRouter.put('/:username/salasana', (req, res, next) => {
    let kayttajaTunnus = req.params.username;
    let user = req.query;

    yhteys.query("update kayttaja set password = ? where username = ?", [user.password, kayttajaTunnus], (err, result, fields) => {
        console.log(result);
        if (err){
            res.send({"virhe": err.message});
        } else {
            res.send({ "viesti": "Salasana muutettu" });
        }
    });
});

module.exports = kayttajaRouter;