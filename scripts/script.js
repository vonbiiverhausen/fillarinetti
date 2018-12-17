console.log("Tästä se alkaa");

document.getElementById("leave_post_btn").addEventListener("click", function () {
    window.location = "post_form.html";
});
document.getElementById("logo").addEventListener("click", function () {
    window.location = "index.html";
    console.log("testi");
});
document
    .getElementById("accurate_search")
    .addEventListener("click", function () {
        window.location = "tarkkahaku.html";
    });
/*-----------------------------*/
/*keski nappin joten näytä noita kaikki pyörät tai niitä mitkä me haluamme*/

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");

    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn_1");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
/*--------------------------------*/

/*kirjautumis sisään näppin tarkistus*/

function checkinputs() {
    var user = document.getElementById("user_input").value;
    var salasana = document.getElementById("salasana_input").value;
    if (user != '' && user != null) {
        document.getElementById('user_input').style.borderColor = "white";
    } else {
        alert("käyttäjä tunnus puuttuu jos et ole rekisteröitynyt, niin Rekisteröidy ");
        document.getElementById('user_input').style.borderColor = "red";

        return false;
    }
    if (salasana != '' && salasana != null) {
        return true;
    } else {
        alert("Salasana puuttuu");
        document.getElementById('salasana_input').style.borderColor = "red";
        return false;
    }
}
/*-----------------------listanakyma--------------------------*/

function listan_tyyli() {
    document.getElementById('btn_show_styles2').style.backgroundColor = "#9eaca7";
    document.getElementById('btn_show_styles1').style.backgroundColor = "#fff";
    var elements = document.getElementsByClassName("column"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.float = 'none';
    }
    var elements = document.getElementsByClassName("pitoisuus"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor = '#9eaca7';
    }
    var elements = document.getElementsByClassName("pitoisuus"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor = '#9eaca7';
    }
    var elements = document.getElementsByClassName("rivi_divi"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.width = '150%';
        elements[i].style.padding = '0px 309% 0px 0px';
        elements[i].style.border = '4px solid #5c86a4';
        //    elements[i].style.backgroundColor = '#5c86a4';
    }
    var elements = document.getElementsByClassName("h_4"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.position = 'relative';
        elements[i].style.left = '300px';
        elements[i].style.top = '-181px';

    }
    var elements = document.getElementsByClassName("kuva_riviksi"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.width = '270px';


    }
    var elements = document.getElementsByClassName("p_riviksi"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.position = 'relative';
        elements[i].style.left = '300px';
        elements[i].style.top = '-170px';
    }
    var elements = document.getElementsByClassName("a_ilmoitus"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.position = 'relative';
        elements[i].style.left = '300px';
        elements[i].style.top = '-155px';
    }

    function myFunction(x) {
        if (x.matches) { // If media query matches
            var elements = document.getElementsByClassName("kuva_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.width = '150px';
            }
            var elements = document.getElementsByClassName("p_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = 'relative';
                elements[i].style.left = '170px';
                elements[i].style.top = '-90px';
            }
            var elements = document.getElementsByClassName("h_4"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = 'relative';
                elements[i].style.left = '170px';
                elements[i].style.top = '-100px';

            }
            var elements = document.getElementsByClassName("a_ilmoitus"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = 'relative';
                elements[i].style.left = '170px';
                elements[i].style.top = '-80px';
            }
        } else {
            var elements = document.getElementsByClassName("kuva_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.width = '270px';
            }
            var elements = document.getElementsByClassName("p_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = 'relative';
                elements[i].style.left = '300px';
                elements[i].style.top = '-170px';
            }
            var elements = document.getElementsByClassName("a_ilmoitus"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = 'relative';
                elements[i].style.left = '300px';
                elements[i].style.top = '-155px';
            }
            var elements = document.getElementsByClassName("h_4"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = 'relative';
                elements[i].style.left = '300px';
                elements[i].style.top = '-181px';

            }
        }
    }
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
}

/*-----------------------listanakyma_takasin_riviksi-------------------------*/

function listan_tyyli_riviksi() {
    document.getElementById('btn_show_styles2').style.backgroundColor = "#fff";
    document.getElementById('btn_show_styles1').style.backgroundColor = "#9eaca7";
    var elements = document.getElementsByClassName("column"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.float = 'left';
    }
    var elements = document.getElementsByClassName("pitoisuus"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.backgroundColor = '#5c86a4';
    }
    var elements = document.getElementsByClassName("rivi_divi"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.width = '';
        elements[i].style.padding = '';
        elements[i].style.border = '';
    }
    var elements = document.getElementsByClassName("kuva_riviksi"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.width = '100%';
    }
    var elements = document.getElementsByClassName("h_4"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.position = '';
        elements[i].style.left = '';
        elements[i].style.top = '';
    }
    var elements = document.getElementsByClassName("p_riviksi"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.position = '';
        elements[i].style.left = '';
        elements[i].style.top = '';
    }

    var elements = document.getElementsByClassName("a_ilmoitus"),
        i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.position = '';
        elements[i].style.left = '';
        elements[i].style.top = '';
    }

    function myFunction(x) {
        if (x.matches) { // If media query matches
            var elements = document.getElementsByClassName("kuva_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.width = '100%';
            }
            var elements = document.getElementsByClassName("h_4"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = '';
                elements[i].style.left = '';
                elements[i].style.top = '';

            }
            var elements = document.getElementsByClassName("p_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = '';
                elements[i].style.left = '';
                elements[i].style.top = '';
            }
            var elements = document.getElementsByClassName("a_ilmoitus"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = '';
                elements[i].style.left = '';
                elements[i].style.top = '';
            }
        } else {
            var elements = document.getElementsByClassName("kuva_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.width = '100%';
            }
            var elements = document.getElementsByClassName("h_4"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = '';
                elements[i].style.left = '';
                elements[i].style.top = '';

            }
            var elements = document.getElementsByClassName("p_riviksi"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = '';
                elements[i].style.left = '';
                elements[i].style.top = '';
            }
            var elements = document.getElementsByClassName("a_ilmoitus"),
                i, len;
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.position = '';
                elements[i].style.left = '';
                elements[i].style.top = '';
            }
        }
    }
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
}