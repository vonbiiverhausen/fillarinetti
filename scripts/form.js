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

  if (z === "noSus") {
    CreateNoSusForm();
  } else if (z === "frSus") {
    CreateFrsusForm();
  } else if (z === "fullSus") {
    CreateFullSusForm();
  } else {
    CreateFatbikeForm();
  }
};
/// Create Form functions
//Creates no suspension form
CreateNoSusForm = () => {
  console.log("ei jousta");
  const elmnt = document.createElement("div");
  const formStucture = document.createElement("form");
  const brandInput = document.createElement("input");
  const space1 = document.createElement("br");
  const prizeInput = document.createElement("input");
  const space2 = document.createElement("br");
  const sizeInput = document.createElement("input");
  const space3 = document.createElement("br");
  const wheelSizeInput = document.createElement("input");
  const space4 = document.createElement("br");
  const uploadImgBtnWrapper = document.createElement("div");
  const imageBtn = document.createElement("button");
  const picInput = document.createElement("input");
  const space5 = document.createElement("br");
  const text_area = document.createElement("textarea");
  const space6 = document.createElement("br");
  const space7 = document.createElement("br");
  const submitBtn = document.createElement("input");
  // id:s for elements
  elmnt.id = "lomake";
  formStucture.id = "form";
  brandInput.id = "brandID";
  prizeInput.id = "prizeID";
  sizeInput.id = "sizeID";
  wheelSizeInput.id = "wheelID";
  picInput.id = "picID";
  uploadImgBtnWrapper.className = "upload_btn_wrapper";
  imageBtn.id = "lataa_kuva";
  text_area.id = "freeTxt";
  submitBtn.id = "submitID";
  //Placeholders for inputs
  brandInput.placeholder = "Merkki";
  prizeInput.placeholder = "Hinta";
  sizeInput.placeholder = "Rungonkoko";
  wheelSizeInput.placeholder = "Renkaankoko";
  text_area.placeholder = "Vapaa kenttä";
  imageBtn.innerHTML = "Lataa kuva";
  //TextArea height
  text_area.rows = "20";
  //Input types
  brandInput.type = "text";
  prizeInput.type = "number";
  sizeInput.type = "number";
  wheelSizeInput.type = "number";
  picInput.type = "file";
  submitBtn.type = "submit";
  submitBtn.value = "Jätä ilmoitus";
  //Image button wrapper
  uploadImgBtnWrapper.appendChild(imageBtn);
  uploadImgBtnWrapper.appendChild(picInput);
  //Everything to getter
  formStucture.appendChild(brandInput);
  formStucture.appendChild(space1);
  formStucture.appendChild(prizeInput);
  formStucture.appendChild(space2);
  formStucture.appendChild(sizeInput);
  formStucture.appendChild(space3);
  formStucture.appendChild(wheelSizeInput);
  formStucture.appendChild(space4);
  formStucture.appendChild(uploadImgBtnWrapper);
  formStucture.appendChild(space5);
  formStucture.appendChild(text_area);
  formStucture.appendChild(space6);
  formStucture.appendChild(space7);
  formStucture.appendChild(submitBtn);
  elmnt.appendChild(formStucture);
  const old_element = document.querySelector("#lomake");
  const parent = document.getElementById("form");

  parent.replaceChild(elmnt, old_element);
};
//Creates frontsuspension bike form.
CreateFrsusForm = () => {
  console.log("etujousto");
  //elements for the new form
  const elmnt = document.createElement("div");
  const formStucture = document.createElement("form");
  const brandInput = document.createElement("input");
  const space1 = document.createElement("br");
  const prizeInput = document.createElement("input");
  const space2 = document.createElement("br");
  const sizeInput = document.createElement("input");
  const space3 = document.createElement("br");
  const wheelSizeInput = document.createElement("input");
  const space4 = document.createElement("br");
  const text_area = document.createElement("textarea");
  const space5 = document.createElement("br");
  const uploadImgBtnWrapper = document.createElement("div");
  const imageBtn = document.createElement("button");
  const picInput = document.createElement("input");
  const space6 = document.createElement("br");
  const space7 = document.createElement("br");
  const submitBtn = document.createElement("input");
  // id:s for elements
  elmnt.id = "lomake";
  formStucture.id = "form";
  brandInput.id = "brandID";
  prizeInput.id = "prizeID";
  sizeInput.id = "sizeID";
  wheelSizeInput.id = "wheelID";
  picInput.id = "picID";
  uploadImgBtnWrapper.className = "upload_btn_wrapper";
  imageBtn.id = "lataa_kuva";
  text_area.id = "freeTxt";
  submitBtn.id = "submitID";
  //Placeholders for inputs
  brandInput.placeholder = "Merkki";
  prizeInput.placeholder = "Hinta";
  sizeInput.placeholder = "Rungonkoko";
  wheelSizeInput.placeholder = "Renkaankoko";
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
  picInput.type = "file";
  submitBtn.type = "submit";
  submitBtn.value = "Jätä ilmoitus";
  //Image button wrapper
  uploadImgBtnWrapper.appendChild(imageBtn);
  uploadImgBtnWrapper.appendChild(picInput);
  //Everything to getter
  formStucture.appendChild(brandInput);
  formStucture.appendChild(space1);
  formStucture.appendChild(prizeInput);
  formStucture.appendChild(space2);
  formStucture.appendChild(sizeInput);
  formStucture.appendChild(space3);
  formStucture.appendChild(wheelSizeInput);
  formStucture.appendChild(space4);
  formStucture.appendChild(uploadImgBtnWrapper);
  formStucture.appendChild(space5);
  formStucture.appendChild(text_area);
  formStucture.appendChild(space6);
  formStucture.appendChild(space7);
  formStucture.appendChild(submitBtn);
  elmnt.appendChild(formStucture);
  const old_element = document.querySelector("#lomake");
  const parent = document.getElementById("form");

  parent.replaceChild(elmnt, old_element);
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
  const uploadImgBtnWrapper = document.createElement("div");
  const imageBtn = document.createElement("button");
  const picInput = document.createElement("input");
  const space6 = document.createElement("br");
  const text_area = document.createElement("textarea");
  const space7 = document.createElement("br");
  const space8 = document.createElement("br");
  const submitBtn = document.createElement("input");
  // id:s for elements
  elmnt.id = "lomake";
  formStucture.id = "form";
  brandInput.id = "brandID";
  susTravel.id = "susTravelID";
  prizeInput.id = "prizeID";
  sizeInput.id = "sizeID";
  wheelSizeInput.id = "wheelID";
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
  formStucture.appendChild(uploadImgBtnWrapper);
  formStucture.appendChild(space6);
  formStucture.appendChild(text_area);
  formStucture.appendChild(space7);
  formStucture.appendChild(space8);
  formStucture.appendChild(submitBtn);
  elmnt.appendChild(formStucture);
  const old_element = document.querySelector("#lomake");
  const parent = document.getElementById("form");

  parent.replaceChild(elmnt, old_element);
};
//Creates fatbike form
CreateFatbikeForm = () => {
  console.log("fatbike");
  const elmnt = document.createElement("div");
  const formStucture = document.createElement("form");
  const brandInput = document.createElement("input");
  const space1 = document.createElement("br");
  const prizeInput = document.createElement("input");
  const space2 = document.createElement("br");
  const sizeInput = document.createElement("input");
  const space3 = document.createElement("br");
  const wheelSizeInput = document.createElement("input");
  const space4 = document.createElement("br");
  const uploadImgBtnWrapper = document.createElement("div");
  const imageBtn = document.createElement("button");
  const picInput = document.createElement("input");
  const space5 = document.createElement("br");
  const text_area = document.createElement("textarea");
  const space6 = document.createElement("br");
  const space7 = document.createElement("br");
  const submitBtn = document.createElement("input");
  // id:s for elements
  elmnt.id = "lomake";
  formStucture.id = "form";
  brandInput.id = "brandID";
  prizeInput.id = "prizeID";
  sizeInput.id = "sizeID";
  wheelSizeInput.id = "wheelID";
  picInput.id = "picID";
  uploadImgBtnWrapper.className = "upload_btn_wrapper";
  imageBtn.id = "lataa_kuva";
  submitBtn.id = "submitID";
  text_area.id = "freeTxt";
  //Placeholders for inputs
  brandInput.placeholder = "Merkki";
  prizeInput.placeholder = "Hinta";
  sizeInput.placeholder = "Rungonkoko";
  wheelSizeInput.placeholder = "Renkaan koko";
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
  picInput.type = "file";
  submitBtn.type = "submit";
  submitBtn.value = "Jätä ilmoitus";
  //Image button wrapper
  uploadImgBtnWrapper.appendChild(imageBtn);
  uploadImgBtnWrapper.appendChild(picInput);
  //Everything to getter
  formStucture.appendChild(brandInput);
  formStucture.appendChild(space1);
  formStucture.appendChild(prizeInput);
  formStucture.appendChild(space2);
  formStucture.appendChild(sizeInput);
  formStucture.appendChild(space3);
  formStucture.appendChild(wheelSizeInput);
  formStucture.appendChild(space4);
  formStucture.appendChild(uploadImgBtnWrapper);
  formStucture.appendChild(space5);
  formStucture.appendChild(text_area);
  formStucture.appendChild(space6);
  formStucture.appendChild(space7);
  formStucture.appendChild(submitBtn);
  elmnt.appendChild(formStucture);
  const old_element = document.querySelector("#lomake");
  const parent = document.getElementById("form");

  parent.replaceChild(elmnt, old_element);
};
/*******
 * <div class="upload_btn_wrapper">
                <button id="lataa_kuva">Lisää kuva</button>
                <input type="file" name="pic" accept="image/*" >
            </div>
 */
