console.log("testi");
//Evenlistener to logo this apears in every page
document.getElementById("logo").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/index.html";
  console.log("testi");
});
function myFunction() {
  const x = document.getElementById("mySelect").value;

  if (x === "mtb") {
    valueMenu();
  } else if (x === "roadbike") {
    console.log("tasamaapyörät");
  } else if (x === "basicBike") {
    console.log("peruspyörät");
  } else if (x === "kidsBike") {
    console.log("lastenpyörät");
  } else if (x === "eBike");
}
//function that creates bike type menu
/*
function valueMenu() {
  let menuDiv = document.querySelector(".form");
  let element = document.createElement("select");
  let firstItem = document.createElement("option");
  let secondItem = document.createElement("option");
  let thirdItem = document.createElement("option");
  let fourthItem = document.createElement("option");
  let noSuspesionNode = document.createTextNode("Täysjäykkä");
  let frontSuspensionNode = document.createTextNode("Etujousto");
  let fullSuspensionNode = document.createTextNode("Täysjousto");
  let fatbikeNode = document.createTextNode("Fatbike");
  element.id = "mtbChoices";
  element.onchange = function() {
    console.log("testi");
    let value = this.value;
    if (value === "noSus") {
      console.log("ei paljon jousta");
    } else if (value === "frSus") {
      console.log("joustaa edestä");
    } else if (value === "fullSus") {
      console.log("täysjousto");
    } else {
      console.log("fatbike");
    }
  };
  firstItem.value = "noSus";
  secondItem.value = "frSus";
  thirdItem.value = "fullSus";
  fourthItem.value = "fatbike";
  firstItem.appendChild(noSuspesionNode);
  secondItem.appendChild(frontSuspensionNode);
  thirdItem.appendChild(fullSuspensionNode);
  fourthItem.appendChild(fatbikeNode);
  element.appendChild(firstItem);
  element.appendChild(secondItem);
  element.appendChild(thirdItem);
  element.appendChild(fourthItem);
  menuDiv.appendChild(element);

  console.log(element);
}
*/
function replaceOldmenu() {}

function mtbForm() {
  console.log(value);
}

valueMenu();
