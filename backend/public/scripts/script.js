$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/api/kayttaja",
        success: function (result, status, xhr) {
            result.forEach(tulos => {
                console.log(tulos);
                $("#kayttajat").append(`<p>Käyttäjä: ${tulos.username}</p>`);
            });
        }
    });

    $("#luoTunnus").click(function () {
        let ktunnus = $("#username").val();
        let pw = $("#password").val();
        let sposti = $("#sposti").val();
        let puhnro = $("#puhnro").val();

        $.ajax({
            url: `/api/kayttaja?username=${ktunnus}&password=${pw}&sposti=${sposti}&puhnro=${puhnro}`,
            type: "POST",
            success: function() {
                console.log('onnistui');
            }
        });
    });
});