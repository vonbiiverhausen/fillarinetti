console.log("testi");
//Evenlistener to logo this apears in every page
document.getElementById("logo").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/index.html";
  console.log("testi");
});
function myFunction() {
  var x = document.getElementById("mySelect").value;

  if (x === "mtb") {
    console.log("toimii");
    let div = document.querySelector(".form");
    let element = document.createElement("select");
    let firstItem = document.createElement("option");
    let secondItem = document.createElement("option");
    let thirdItem = document.createElement("option");
    let fourthItem = document.createElement("option");
    let noSuspesionNode = document.createTextNode("Täysjäykkä");
    let frontSuspensionNode = document.createTextNode("Etujousto");
    let fullSuspensionNode = document.createTextNode("Täysjousto");
    let fatbikeNode = document.createTextNode("Fatbike");
    firstItem.appendChild(noSuspesionNode);
    secondItem.appendChild(frontSuspensionNode);
    thirdItem.appendChild(fullSuspensionNode);
    fourthItem.appendChild(fatbikeNode);
    element.appendChild(firstItem);
    element.appendChild(secondItem);
    element.appendChild(thirdItem);
    element.appendChild(fourthItem);
    div.appendChild(element);
  }
}
