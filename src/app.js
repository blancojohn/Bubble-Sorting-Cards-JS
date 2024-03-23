/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let palos = ["♦", "♥", "♠", "♣"];
let cartasDesordenadas = [];
let botónDraw = document.querySelector("#draw");

/* captura el valor pasado por el input */
function generaInputCartas() {
  cartasDesordenadas = [];
  let inputNumber = document.querySelector("#input-number");
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

  let numberCentral = document.createElement("div");
  let numberRandom = Math.floor(Math.random() * numbers.length);
  let number = numbers[numberRandom];
  numberCentral.innerHTML = changeValiu(number);

  let paloInferior = document.createElement("div");
  paloInferior.classList.add("position-absolute", "bottom-0", "end-0");
  paloInferior.innerHTML = palo;

  mostrarCartas.appendChild(carta);
  carta.appendChild(cardBody);
  cardBody.appendChild(paloSuperior);
  cardBody.appendChild(numberCentral);
  cardBody.appendChild(paloInferior);

  let objetoCarta = {
    palo: palo,
    number: number
  };

  if (palo == "♦" || palo == "♥") {
    paloSuperior.style.color = "red";
    paloInferior.style.color = "red";
    numberCentral.style.color = "red";
  } else {
    paloSuperior.style.color = "black";
    paloInferior.style.color = "black";
    numberCentral.style.color = "black";
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

      if (cartasDesordenadas[j].number > cartasDesordenadas[j + 1].number) {
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

        let numberCentral = document.createElement("div");
        numberCentral.innerHTML = changeValiu(cartasDesordenadas[x].number);

        let paloInferior = document.createElement("div");
        paloInferior.classList.add("position-absolute", "bottom-0", "end-0");
        paloInferior.innerHTML = cartasDesordenadas[x].palo;

        cartasOrdenadas.appendChild(contenedor);
        contenedor.appendChild(cartaEnOrden);
        cartaEnOrden.appendChild(cardBody);
        cardBody.appendChild(paloSuperior);
        cardBody.appendChild(numberCentral);
        cardBody.appendChild(paloInferior);

        if (
          cartasDesordenadas[x].palo == "♦" ||
          cartasDesordenadas[x].palo == "♥"
        ) {
          paloSuperior.style.color = "red";
          paloInferior.style.color = "red";
          numberCentral.style.color = "red";
        } else {
          paloSuperior.style.color = "black";
          paloInferior.style.color = "black";
          numberCentral.style.color = "black";
        }
      }
    }
  }
  console.log("cartas ordenadas", cartasDesordenadas);
}
function changeValiu(value) {
  switch (value) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";

    default:
      return value;
  }
}

botonSort.addEventListener("click", ordenaCartas);
