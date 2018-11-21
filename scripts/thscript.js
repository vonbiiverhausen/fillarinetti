sfunction = () => {
  let e = document.getElementById("rad");
let value = e.value;
    
    switch(value){
            
        case "maastop":
        
            $(document).ready(function(){
            console.log("Lastenpyörä");
            $("#bikeStyle").replaceWith(
             $("<div>", {
            id: "bikeStyle"
          }).append(
            $("<select>", {
              id: "sB_style",
              name: "mtbStyle",
              onchange: "nextmenu()"
            }).append(
              $("<option>", {
                value: "noSus",
                text: "Ei joustoa"
              })
             )
            )
                );
    
        });
            break;
             case "maantiep":
      console.log("Lastenpyörä");
            
    }
}
