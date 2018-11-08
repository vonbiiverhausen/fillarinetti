console.log("testi");
//Evenlistener to logo this apears in every page
document.getElementById("logo").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/index.html";
  console.log("testi");
});
myFunction = () => {
  const x = document.getElementById("mySelect").value;

  if (x === "mtb") {
    console.log("mtb");
  } else if (x === "roadbike") {
    console.log("tasamaapyörät");
  } else if (x === "basicBike") {
    console.log("peruspyörät");
  } else if (x === "kidsBike") {
    console.log("lastenpyörät");
  } else if (x === "eBike");
};

formSelection = () => {
  const z = document.getElementById("menu").value;

  if (z === "noSus") {
    noSusForm();
  } else if (z === "frSus") {
    CreateFrsusForm();
  } else if (z === "fullSus") {
    fullSusForm();
  } else {
    fatbikeForm();
  }
};
//Creates no suspension form
CreateNoSusForm = () => {
  console.log("ei jousta");
};
//Creates frontsuspension bike form.
CreateFrsusForm = () => {
  console.log("etujousto");
  //elements for the new form
  const elmnt = document.createElement("div");
  const formStucture = document.createElement("form");
  const brandInput = document.createElement("input");
  const prizeInput = document.createElement("input");
  const sizeInput = document.createElement("input");
  const wheelSizeInput = document.createElement("input");
  const picInput = document.createElement("input");
  const submitBtn = document.createElement("button");
  // id:s for elements
  elmnt.id = "frsusForm";
  formStucture.id = "form";
  brandInput.id = "brandID";
  prizeInput.id = "prizeID";
  sizeInput.id = "sizeID";
  wheelSizeInput.id = "wheelID";
  picInput.id = "picID";
  submitBtn.id = "submitID";
  //Placeholders for inputs
  brandInput.placeholder = "Merkki";
  prizeInput.placeholder = "Hinta";
  sizeInput.placeholder = "Rungonkoko";
  wheelSizeInput.placeholder = "Renkaan koko";
  submitBtn.innerHTML = "Jätä ilmoitus";
  //Input types
  brandInput.type = "text";
  prizeInput.type = "number";
  sizeInput.type = "number";
  wheelSizeInput.type = "number";
  picInput.style = "file";
  submitBtn.type = "submit";
  //Everything to getter
  formStucture.appendChild(brandInput);
  formStucture.appendChild(prizeInput);
  formStucture.appendChild(sizeInput);
  formStucture.appendChild(wheelSizeInput);
  formStucture.appendChild(picInput);
  formStucture.appendChild(submitBtn);

  const old_element = document.querySelector("#lomake");
  const parent = document.getElementById("form");

  parent.replaceChild(elmnt, old_element);
};

//Creates fullsuspension form
CreateFullSusForm = () => {
  console.log("täysjousto");
};
//Creates fatbike form
CreateFatbikeForm = () => {
  console.log("fatbike");
};
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
