/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let números = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13"
];
let palos = ["♦", "♥", "♠", "♣"];
let cartasDesordenadas = [];
let botónDraw = document.querySelector("#draw");

/* captura el valor pasado por el input */
function generaInputCartas() {
  cartasDesordenadas = [];
  let inputNumber = document.querySelector("#input-número");
  let inputNumberValue = inputNumber.value;
  console.log("Input pasado", inputNumberValue, "cartas");

  for (let i = 1; i <= inputNumberValue; i++) {
    cartasDesordenadas.push(generarCartas());
  }

  console.log(cartasDesordenadas, "cartas repartidas");
  return cartasDesordenadas;
}

let drawDesactivado = function() {
  this.disabled = true;
};
botónDraw.addEventListener("click", drawDesactivado, false);

/* Dibuja las cartas */
function generarCartas() {
  let mostrarCartas = document.querySelector("#mostrar-cartas");
  let carta = document.createElement("div");
  carta.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let paloSuperior = document.createElement("div");
  paloSuperior.classList.add("position-absolute", "top-0", "start-0");
  let palosRandom = Math.floor(Math.random() * palos.length);
  let palo = palos[palosRandom];
  paloSuperior.innerHTML = palo;

  let númeroCentral = document.createElement("div");
  let númeroRandom = Math.floor(Math.random() * números.length);
  let número = changeValiu(números[númeroRandom]);
  númeroCentral.innerHTML = número;

  let paloInferior = document.createElement("div");
  paloInferior.classList.add("position-absolute", "bottom-0", "end-0");
  paloInferior.innerHTML = palo;

  mostrarCartas.appendChild(carta);
  carta.appendChild(cardBody);
  cardBody.appendChild(paloSuperior);
  cardBody.appendChild(númeroCentral);
  cardBody.appendChild(paloInferior);

  let objetoCarta = {
    palo: palo,
    número: número
  };

  if (palo == "♦" || palo == "♥") {
    paloSuperior.style.color = "red";
    paloInferior.style.color = "red";
    númeroCentral.style.color = "red";
  } else {
    paloSuperior.style.color = "black";
    paloInferior.style.color = "black";
    númeroCentral.style.color = "black";
  }
  return objetoCarta;
}

botónDraw.addEventListener("click", generaInputCartas);

/* cartasDesordenadas = generarCartas(); */
let botonSort = document.querySelector("#sort");
function ordenaCartas() {
  const len = cartasDesordenadas.length;
  console.log("ordenar", len, "cartas repartidas");
  let cartasOrdenadas = document.querySelector("#cartas-ordenadas");

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      let contenedor = document.createElement("div");

      contenedor.classList.add("d-flex");

      if (cartasDesordenadas[j].número > cartasDesordenadas[j + 1].número) {
        const temp = cartasDesordenadas[j];
        cartasDesordenadas[j] = cartasDesordenadas[j + 1];
        cartasDesordenadas[j + 1] = temp;
      }
      for (let x = 0; x < len; x++) {
        let cartaEnOrden = document.createElement("div");
        cartaEnOrden.classList.add("card");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let paloSuperior = document.createElement("div");
        paloSuperior.classList.add("position-absolute", "top-0", "start-0");
        paloSuperior.innerHTML = cartasDesordenadas[x].palo;

        let númeroCentral = document.createElement("div");
        númeroCentral.innerHTML = changeValiu(cartasDesordenadas[x].número);

        let paloInferior = document.createElement("div");
        paloInferior.classList.add("position-absolute", "bottom-0", "end-0");
        paloInferior.innerHTML = cartasDesordenadas[x].palo;

        contenedor.appendChild(cartaEnOrden);
        cartaEnOrden.appendChild(cardBody);
        cardBody.appendChild(paloSuperior);
        cardBody.appendChild(númeroCentral);
        cardBody.appendChild(paloInferior);

        if (
          cartasDesordenadas[x].palo == "♦" ||
          cartasDesordenadas[x].palo == "♥"
        ) {
          paloSuperior.style.color = "red";
          paloInferior.style.color = "red";
          númeroCentral.style.color = "red";
        } else {
          paloSuperior.style.color = "black";
          paloInferior.style.color = "black";
          númeroCentral.style.color = "black";
        }
      }
      cartasOrdenadas.appendChild(contenedor);
    }

    /*let contenedor = document.createElement("div");
    contenedor.style.display = "flex";*/
  }
  console.log("cartas ordenadas", cartasDesordenadas);
}

function changeValiu(value) {
  switch (value) {
    case "1":
      return "A";
    case "11":
      return "J";
    case "12":
      return "Q";
    case "13":
      return "K";

    default:
      return value;
  }
}

botonSort.addEventListener("click", ordenaCartas);
