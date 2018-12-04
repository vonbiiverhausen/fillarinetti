$(document).ready(function () {

    // Hae ilmoitukset
    $.ajax({
        url: "/api/ilmoitukset",
        type: "GET",
        success: function (result) {
            if (result.length === 0) {
                $("#ilmoitukset").html("Ilmoituksia ei löytynyt");
            } else {
                for (let i = 0; i < result.length; i++) {
                    let paivays = new Date(result[i].ilmJatetty);
                    $("#ilmoitukset").append(`
                    <div class="ilmoitus">
                        <h3>${result[i].ilmTila} ${result[i].tyyppi} ${result[i].hinta} € (${result[i].paikkakunta})</h3>
                        <img src="./images/${result[i].kuva}" />
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
                        Ilmoitus jätetty: ${paivays.toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki' })}<br />
                    </div>`);
                }
            }
        }
    });

    // Hae käyttäjät
    $.ajax({
        type: "GET",
        url: "/api/kayttaja/",
        success: function (result, status, xhr) {
            result.forEach(tulos => {
                $("#kayttajat").append(`<p>Käyttäjä: ${tulos.username}</p>`);
            });
        }
    });


    $("#addPost").submit(function (event) {
        event.preventDefault();

        let ilmData = new FormData();
        ilmData.append("username", $("#kayttaja").val());
        ilmData.append("hinta", $("#hinta").val());
        ilmData.append("tyyppi", $("#tyyppi").val());
        ilmData.append("alatyyppi", $("#alatyyppi").val());
        ilmData.append("merkki", $("#merkki").val());
        ilmData.append("rengaskoko", $("#rengaskoko").val());
        ilmData.append("rungonkoko", $("#rungonkoko").val());
        ilmData.append("paikkakunta", $("#paikkakunta").val());
        ilmData.append("kuva", document.getElementById("kuva").files[0]);
        ilmData.append("kuvaus", $("#kuvaus").val());

        $.ajax({
            url: '/api/ilmoitukset',
            type: "POST",
            data: ilmData,
            processData: false,
            contentType: false,
            success: function (data, status) {
                alert(data.viesti);
                location.reload(true);
            },
            error: function(xhr, status, error) {
                let virhe = JSON.parse(xhr.responseText);
                alert(virhe.virhe);
            }
        });

    });

    $("#addUser").submit(function(event) {
        event.preventDefault();

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
                location.reload(true);
            },
            error: function(xhr, status, error) {
                let virhe = JSON.parse(xhr.responseText);
                alert(virhe.virhe);
            }
        });
    }
});