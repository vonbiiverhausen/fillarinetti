$(document).ready(function () {

    // Hae ilmoitukset
    $.ajax({
        url: "/api/ilmoitukset",
        type: "GET",
        success: function (result) {
            if (result.length === 0) {
                $("#ilmoitukset").html("Ilmoituksia ei löytynyt");
            } else {
                //console.log(result[0]);
                for (let i = 0; i < result.length; i++) {
                    let paivays = new Date(result[i].ilmJatetty);
                    $("#ilmoitukset").append(`
                    <div class="ilmoitus">
                        <h3>${result[i].ilmTila} ${result[i].tyyppi} ${result[i].hinta} € (${result[i].paikkakunta})</h3> 
                        <strong>Tiedot</strong>
                        <hr />
                        Tyyppi: ${result[i].tyyppi}<br />
                        Alatyyppi: ${result[i].alatyyppi}<br />
                        Merkki: ${result[i].merkki}<br />
                        Renkaan koko: ${result[i].rengas_koko}<br />
                        Rungon koko: ${result[i].runko_koko}<br />
                        Kuvaus: ${result[i].kuvaus}<br />
                        <hr />
                        Ilmoituksen id: ${result[i].ilmId}, 
                        Ilmoituksen jättäjä: ${result[i].ilmJattaja}, 
                        Ilmoitus jätetty: ${paivays.toLocaleString('fi-FI', { timeZone: 'UTC' })}<br />
                    </div>`);
                }
            }
        }
    });

    // Hae käyttäjät
    $.ajax({
        type: "GET",
        url: "/api/kayttaja",
        success: function (result, status, xhr) {
            result.forEach(tulos => {
                //console.log(tulos);
                $("#kayttajat").append(`<p>Käyttäjä: ${tulos.username}</p>`);
            });
        }
    });

    $("#lisaaIlm").click(function () {
        let ilmData = {
            "username": $("#kayttaja").val(),
            "hinta": $("#hinta").val(),
            "tyyppi": $("#tyyppi").val(),
            "alatyyppi": $("#alatyyppi").val(),
            "merkki": $("#merkki").val(),
            "rengaskoko": $("#rengaskoko").val(),
            "rungonkoko": $("#rungonkoko").val(),
            "paikkakunta": $("#paikkakunta").val(),
            "kuva": $("#kuva").val(),
            "kuvaus": $("#kuvaus").val()
        };

        teePostKutsu("/api/ilmoitukset", JSON.stringify(ilmData));
    });

    $("#luoTunnus").click(function () {
        let userdata = {
            username: $("#username").val(),
            password: $("#password").val(),
            sposti: $("#sposti").val(),
            puhnro: $("#puhnro").val()
        };

        teePostKutsu("/api/kayttaja", JSON.stringify(userdata));
    });

    function teePostKutsu(osoite, tiedot) {
        $.ajax({
            url: osoite,
            type: "POST",
            data: tiedot,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data, status) {
                alert(data.viesti);
            },
            error: function(data) {
                alert(data.virhe);
            }
        });
    }
});