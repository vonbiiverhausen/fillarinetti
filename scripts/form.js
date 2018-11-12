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
    //mtb dropdown menu
  } else if (x === "roadbike") {
    console.log("tasamaapyörät");
    //roadbike dropdown menu
  } else if (x === "basicBike") {
    console.log("peruspyörät");
    //basicbike dropdown menu
  } else if (x === "kidsBike") {
    console.log("lastenpyörät");
    //kids bike dorpdown menu
  } else if (x === "eBike");
  //eBike dropdown menu
};

formSelection = () => {
  const z = document.getElementById("menu").value;
  console.log(z);
  if (z === "fullSus") {
    console.log("moi");
    document.getElementById("susTravel_menu").style.visibility = "visible";
  } else {
    document.getElementById("susTravel_menu").style.visibility = "hidden";
  }
};

//Creates fullsuspension form
CreateFullSusForm = () => {
  console.log("täysjousto");
  const elmnt = document.createElement("div");
  const formStucture = document.createElement("form");
  const brandInput = document.createElement("input");
  const space1 = document.createElement("br");
  const susTravel = document.createElement("input");
  const space2 = document.createElement("br");
  const prizeInput = document.createElement("input");
  const space3 = document.createElement("br");
  const sizeInput = document.createElement("input");
  const space4 = document.createElement("br");
  const wheelSizeInput = document.createElement("input");
  const space5 = document.createElement("br");
  const location_input = document.createElement("input");
  const space6 = document.createElement("br");
  const uploadImgBtnWrapper = document.createElement("div");
  const imageBtn = document.createElement("button");
  const picInput = document.createElement("input");
  const space7 = document.createElement("br");
  const text_area = document.createElement("textarea");
  const space8 = document.createElement("br");
  const space9 = document.createElement("br");
  const submitBtn = document.createElement("input");
  // id:s for elements
  elmnt.id = "lomake";
  formStucture.id = "form";
  brandInput.id = "brandID";
  susTravel.id = "susTravelID";
  prizeInput.id = "prizeID";
  sizeInput.id = "sizeID";
  wheelSizeInput.id = "wheelID";
  location_input.id = "locationID";
  picInput.id = "picID";
  uploadImgBtnWrapper.className = "upload_btn_wrapper";
  imageBtn.id = "lataa_kuva";
  text_area.id = "freeTxt";
  submitBtn.id = "submitID";
  //Placeholders for inputs
  brandInput.placeholder = "Merkki";
  susTravel.placeholder = "Jouston matka";
  prizeInput.placeholder = "Hinta";
  sizeInput.placeholder = "Rungonkoko";
  wheelSizeInput.placeholder = "Renkaankoko";
  location_input.placeholder = "Paikkakunta";
  submitBtn.innerHTML = "Jätä ilmoitus";
  text_area.placeholder = "Vapaa kenttä";
  imageBtn.innerHTML = "Lataa kuva";
  //TextArea height
  text_area.rows = "20";
  //Input types
  brandInput.type = "text";
  prizeInput.type = "number";
  sizeInput.type = "number";
  wheelSizeInput.type = "number";
  location_input.type = "text";
  picInput.type = "file";
  submitBtn.type = "submit";
  submitBtn.value = "Jätä ilmoitus";
  //Image button wrapper
  uploadImgBtnWrapper.appendChild(imageBtn);
  uploadImgBtnWrapper.appendChild(picInput);
  //Everything to getter
  formStucture.appendChild(brandInput);
  formStucture.appendChild(space1);
  formStucture.appendChild(susTravel);
  formStucture.append(space2);
  formStucture.appendChild(prizeInput);
  formStucture.appendChild(space3);
  formStucture.appendChild(sizeInput);
  formStucture.appendChild(space4);
  formStucture.appendChild(wheelSizeInput);
  formStucture.appendChild(space5);
  formStucture.appendChild(location_input);
  formStucture.appendChild(space6);
  formStucture.appendChild(uploadImgBtnWrapper);
  formStucture.appendChild(space7);
  formStucture.appendChild(text_area);
  formStucture.appendChild(space8);
  formStucture.appendChild(space9);
  formStucture.appendChild(submitBtn);
  elmnt.appendChild(formStucture);
  const old_element = document.querySelector("#lomake");
  const parent = document.getElementById("form");

  parent.replaceChild(elmnt, old_element);
};
