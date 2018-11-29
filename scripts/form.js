//Dynamic forms logick
//Creates new submenu for fullsuspension bikes
nextmenu = () => {
  var e = document.getElementById("mtb_style").value;
  console.log("testi");
  console.log(e);
  if (e === "fullSus") {
    $(document).ready(function() {
      $("#subMenu").replaceWith(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<div>", {
          id: "subMenu"
        }).append(
          $("<select/>", {
            class: "selectstyle",
            id: "mtbS",
            name: "mtbStyle"
          }).append(
            $("<option>", {
              value: "sSus",
              text: "no nyt on joustoa"
            }),
            $("<option>", {
              value: "mSus",
              text: "vähän joustoa"
            }),
            $("<option>", {
              value: "lSus",
              text: "Täysjousto"
            })
          )
        )
      );
    });
  } else {
    clearEsubMenu();
    clearSubmenu();
  }
};

eBikeSusTravel = () => {
  var eMtbType = document.getElementById("EmtbS").value;
  if (eMtbType === "E_fullSus") {
    $(document).ready(function() {
      $("#eBikesub").replaceWith(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<div>", {
          id: "eBikesub"
        }).append(
          $("<select/>", {
            class: "selectstyle",
            id: "EmtbSusT",
            name: "eMTBsusTravel"
          }).append(
            $("<option>", {
              value: "E_susS",
              text: "Pieni joustomatka"
            }),
            $("<option>", {
              value: "E_susM",
              text: "M-joustomatka"
            }),
            $("<option>", {
              value: "E_susL",
              text: "L-joustomatka"
            }),
            $("<option>", {
              value: "E_susXL",
              text: "XL-joustomatka"
            })
          )
        )
      );
    });
  } else {
    clearEsubMenu();
  }
};

ebikeFunction = () => {
  var e = document.getElementById("eBike_style").value;
  console.log("testi");
  console.log(e);
  if (e === "eMtb") {
    $(document).ready(function() {
      console.log("moi testailalalaall");
      $("#subMenu").replaceWith(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<div>", {
          id: "subMenu"
        }).append(
          $("<select/>", {
            class: "selectstyle",
            id: "EmtbS",
            name: "e_mtbStyle",
            onchange: "eBikeSusTravel()"
          }).append(
            $("<option>", {
              value: "E_noSus",
              text: "Ei joustoa"
            }),
            $("<option>", {
              value: "E_frSus",
              text: "Etujousto"
            }),
            $("<option>", {
              value: "E_fullSus",
              text: "Täysjousto"
            }),
            $("<option>", {
              value: "E_fatbike",
              text: "Fatbike"
            })
          ),
          $("<br>"),
          $("<select/>", {
              class: "selectstyle",
            id: "EmtbWsize",
            name: "EmtbWsize"
          }).append(
            $("<option>", {
              value: "mtb26",
              text: '26"'
            }),
            $("<option>", {
              value: "mtb27,5",
              text: '27,5"'
            }),
            $("<option>", {
              value: "mtb27,5+",
              text: '27,5"+'
            }),
            $("<option>", {
              value: "mtb29",
              text: '29"+'
            }),
            $("<option>", {
              value: "mtbWother",
              text: "Muu koko"
            })
          ),

          $("<select>", {
            class: "selectstyle",
            id: "mtbBsize",
            name: "mtbBodySize"
          }).append(
            $("<option>", {
              value: "mtb_xs",
              text: "XS"
            }),
            $("<option>", {
              value: "mtb_s",
              text: "S"
            }),
            $("<option>", {
              value: "mtb_m",
              text: "M"
            }),
            $("<option>", {
              value: "mtb_l",
              text: "L"
            }),
            $("<option>", {
              value: "mtb_xl",
              text: "XL"
            }),
            $("<option>", {
              value: "mtb_14",
              text: '14"'
            }),
            $("<option>", {
              value: "mtb_15",
              text: '15"'
            }),
            $("<option>", {
              value: "mtb_16",
              text: '16"'
            }),
            $("<option>", {
              value: "mtb_17",
              text: '17"'
            }),
            $("<option>", {
              value: "mtb_18",
              text: '18"'
            }),
            $("<option>", {
              value: "mtb_19",
              text: '19"'
            }),
            $("<option>", {
              value: "mtb_20",
              text: '21" tai isompi'
            })
          )
        )
      );
    });
  } else {
    ebikeHybridSize();
    clearEsubMenu();
  }
};
//Function that clears subMenu div
clearSubmenu = () => {
  $(document).ready(function() {
    $("#subMenu").replaceWith(
      $("<div>", {
        id: "subMenu"
      })
    );
  });
};
//Function that clears ebikeSub div
clearEsubMenu = () => {
  $(document).ready(function() {
    $("#eBikesub").replaceWith(
      $("<div>", {
        id: "eBikesub"
      })
    );
  });
};
//Creates selectmenus foe eHybrid bikes
ebikeHybridSize = () => {
  $(document).ready(function() {
    $("#subMenu").replaceWith(
      $("<div>", {
        id: "subMenu"
      }).append(
        $("<select/>", {
          class: "selectstyle",
          id: "eBike_style",
          name: "eBike_style"
        }).append(
          $("<option>", {
            value: "e_hybrid_s",
            text: "S"
          }),
          $("<option>", {
            value: "e_hybrid_s",
            text: "M"
          }),
          $("<option>", {
            value: "e_hybrid_l",
            text: "L"
          }),
          $("<option>", {
            value: "e_hybrid_l",
            text: "L"
          }),
          $("<option>", {
            value: "e_hybrid_xl",
            text: "XL"
          })
        )
      )
    );
  });
  clearEsubMenu();
};

//creates more submenus for forms
formfunction = () => {
  let e = document.getElementById("menu");
  console.log(e);
  let value = e.value;
  console.log(value);

  switch (value) {
    //creates submenus for mountainbikes
    case "mtb":
      console.log("Se on maastopyörä");
      $(document).ready(function() {
        $("#bikeStyle").replaceWith(
          // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
          $("<div>", {
            id: "bikeStyle"
          }).append(
            $("<select/>", {
              class: "selectstyle",
              id: "mtb_style",
              name: "mtbStyle",
              onchange: "nextmenu()"
            }).append(
              $("<option>", {
                value: "noSus",
                text: "Ei joustoa"
              }),
              $("<option>", {
                value: "frSus",
                text: "Etujousto"
              }),
              $("<option>", {
                value: "fullSus",
                text: "Täysjousto"
              }),
              $("<option>", {
                value: "fatBike",
                text: "Fatbike"
              })
            ),
            $("<br>"),
            $("<select/>", {
              class: "selectstyle",
              id: "mtb_w_size",
              name: "mtbWheelSize"
            }).append(
              $("<option>", {
                value: "mtb26",
                text: '26"'
              }),
              $("<option>", {
                value: "mtb27,5",
                text: '27,5"'
              }),
              $("<option>", {
                value: "mtb27,5+",
                text: '27,5"+'
              }),
              $("<option>", {
                value: "mtb29",
                text: '29"+'
              }),
              $("<option>", {
                value: "mtbWother",
                text: "Muu koko"
              })
            ),
            $("<br>"),
            $("<select>", {
              class: "selectstyle",
              id: "mtbBsize",
              name: "mtbBodySize"
            }).append(
              $("<option>", {
                value: "mtb_xs",
                text: "XS"
              }),
              $("<option>", {
                value: "mtb_s",
                text: "S"
              }),
              $("<option>", {
                value: "mtb_m",
                text: "M"
              }),
              $("<option>", {
                value: "mtb_l",
                text: "L"
              }),
              $("<option>", {
                value: "mtb_xl",
                text: "XL"
              }),
              $("<option>", {
                value: "mtb_14",
                text: '14"'
              }),
              $("<option>", {
                value: "mtb_15",
                text: '15"'
              }),
              $("<option>", {
                value: "mtb_16",
                text: '16"'
              }),
              $("<option>", {
                value: "mtb_17",
                text: '17"'
              }),
              $("<option>", {
                value: "mtb_18",
                text: '18"'
              }),
              $("<option>", {
                value: "mtb_19",
                text: '19"'
              }),
              $("<option>", {
                value: "mtb_20",
                text: '21" tai isompi'
              })
            )
          )
        );
      });
      clearSubmenu();
      clearEsubMenu();
      break;
    //creates form for roadbikes
    case "rBike":
      console.log("Se on maantiepyörä");
      $(document).ready(function() {
        $("#bikeStyle").replaceWith(
          $("<div>", {
            id: "bikeStyle"
          }).append(
            $("<select/>", {
              class: "selectstyle",
              id: "rBike_style",
              name: "RB_style"
            }).append(
              $("<option>", {
                value: "rBike",
                text: "Maantiepyörä"
              }),
              $("<option>", {
                value: "cyclo",
                text: "Cyclocross"
              }),
              $("<option>", {
                value: "hybrid",
                text: "Hybridpyörä"
              }),
              $("<option>", {
                value: "timeA",
                text: "Aika-ajopyörä"
              })
            ),
            $("<br>"),
            $("<select/>", {
              class: "selectstyle",
              id: "bodyMat",
              name: "RBbodyMaterial"
            }).append(
              $("<option>", {
                value: "alu",
                text: "Alumiiini"
              }),
              $("<option>", {
                value: "carbon",
                text: "Hiilikuitu"
              })
            ),
            $("<br>"),
            $("<select/>", {
              class: "selectstyle",
              id: "rbBSize",
              name: "RBbodysize"
            }).append(
              $("<option>", {
                value: "rb_47",
                text: "47cm"
              }),
              $("<option>", {
                value: "rb_48",
                text: "48cm"
              }),
              $("<option>", {
                value: "rb_49",
                text: "49cm"
              }),
              $("<option>", {
                value: "rb_50",
                text: "50cm"
              }),
              $("<option>", {
                value: "rb_51",
                text: "51cm"
              }),
              $("<option>", {
                value: "rb_52",
                text: "52cm"
              }),
              $("<option>", {
                value: "rb_53",
                text: "53cm"
              }),
              $("<option>", {
                value: "rb_54",
                text: "54cm"
              }),
              $("<option>", {
                value: "rb_55",
                text: "55cm"
              }),
              $("<option>", {
                value: "rb_56",
                text: "56cm"
              }),
              $("<option>", {
                value: "rb_57",
                text: "57cm"
              }),
              $("<option>", {
                value: "rb_58",
                text: "58cm"
              }),
              $("<option>", {
                value: "rb_59",
                text: "59cm"
              }),
              $("<option>", {
                value: "rb_60",
                text: "60cm"
              }),
              $("<option>", {
                value: "rb_61",
                text: "61cm"
              }),
              $("<option>", {
                value: "rb_62",
                text: "62cm"
              }),
              $("<option>", {
                value: "rb_63",
                text: "63cm tai isompi"
              })
            )
          )
        );
        clearEsubMenu();
        clearSubmenu();
      });
      break;
    //creates form for basicbikes
    case "bBike":
      console.log("Se on maantiepyörä");
      $(document).ready(function() {
        $("#bikeStyle").replaceWith(
          $("<div>", {
            id: "bikeStyle"
          }).append(
            $("<select/>", {
              class: "selectstyle",
              id: "bB_style",
              name: "bB_style"
            }).append(
              $("<option>", {
                value: "singleG",
                text: "Yksivaihteinen"
              }),
              $("<option>", {
                value: "chainG",
                text: "Ketjuvaihteinen"
              }),
              $("<option>", {
                value: "BBgear",
                text: "Napavaihteinen"
              })
            ),

            $("<br>"),
            $("<select/>", {
              class: "selectstyle",
              id: "gender",
              name: "BB_gender"
            }).append(
              $("<option>", {
                value: "female",
                text: "Naistepyörä"
              }),
              $("<option>", {
                value: "men",
                text: "Miestenpyörä"
              }),

              $("<select/>", {
                class: "selectstyle",
                id: "female_size",
                name: "fem_size"
              }).append(
                $("<option>", {
                  value: "female_s",
                  text: "S"
                }),
                $("<option>", {
                  value: "female_m",
                  text: "M"
                })
              )
            )
          )
        );
        clearEsubMenu();
        clearSubmenu();
      });
      break;
    //creates form for kids bikes
    case "kidsBike":
      console.log("Lastenpyörä");
      $(document).ready(function() {
        $("#bikeStyle").replaceWith(
          $("<div>", {
            id: "bikeStyle"
          }).append(
            $("<select/>", {
              class: "selectstyle",
              id: "kB_style",
              name: "kB_style"
            }).append(
              $("<option>", {
                value: "KickB",
                text: "Potkupyörä"
              }),
              $("<option>", {
                value: "BasicKbike",
                text: "Normipyörä"
              }),
              $("<option>", {
                value: "otherKbike",
                text: "Muu lastenpyörä"
              })
            ),
            $("<br>"),
            $("<select/>", {
              class: "selectstyle",
              id: "kidsSizes",
              name: "kids_sizes"
            }).append(
              $("<option>", {
                value: "kids_12",
                text: '12"'
              }),
              $("<option>", {
                value: "kids_16",
                text: '16"'
              }),

              $("<option>", {
                value: "kids_20",
                text: '20"'
              }),
              $("<option>", {
                value: "kids_24",
                text: '24"'
              }),
              $("<option>", {
                value: "kids_26",
                text: '26"'
              })
            )
          )
        );
        clearEsubMenu();
        clearSubmenu();
      });
      break;
    case "eBike":
      console.log("Se on sähköpyörä");
      $(document).ready(function() {
        $("#bikeStyle").replaceWith(
          $("<div>", {
            id: "bikeStyle"
          }).append(
            $("<select/>", {
              class: "selectstyle",
              id: "eBike_style",
              name: "eBike_style",
              onchange: "ebikeFunction()"
            }).append(
              $("<option>", {
                value: "eBike",
                text: "Hybrid Sähköpyörä"
              }),
              $("<option>", {
                value: "eMtb",
                text: "Sähkömaastopyörä"
              }),

              $("<option>", {
                value: "otherEbike",
                text: "Muu sähköpyörä"
              })
            )
          )
        );
      });
      ebikeHybridSize();
      break;
    case "otherBike":
      console.log("Se on muu pyörä");
      $(document).ready(function() {
        $("#bikeStyle").replaceWith(
          $("<div>", {
            id: "bikeStyle"
          }).append(
            $("<select/>", {
              class: "selectstyle",
              id: "oBike_style",
              name: "oBike_style"
            }).append(
              $("<option>", {
                value: "bmx",
                text: "BMX"
              }),
              $("<option>", {
                value: "fix",
                text: "Fiksi"
              }),
              $("<option>", {
                value: "dirt",
                text: "Dirtpyörä"
              }),
              $("<option>", {
                value: "cargoB",
                text: "Tavarapyörä"
              }),
              $("<option>", {
                value: "retro",
                text: "Retro"
              }),
              $("<option>", {
                value: "fix",
                text: "Fiksi"
              }),
              $("<option>", {
                value: "lBike",
                text: "Nojapyörä"
              }),
              $("<option>", {
                value: "chop",
                text: "Chopperi"

              }),
              $("<option>", {
                value: "foldB",
                text: "Taittopyörä"
              }),
              $("<option>", {
                value: "weirdBike",
                text: "Joku muu pyörä...."
              })
            )
          ),
          $("<p>", {
            text:
              "Tähän pyörävalikkoon ei löydy kokoja. Joten lisätietoihin koot kiitos."
          })
        );
      });
      clearEsubMenu();
      clearSubmenu();
      break;
  }
};
