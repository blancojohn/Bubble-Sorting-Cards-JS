/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/*
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/
let números = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let palos = ["♦", "♥", "♠", "♣"];
let cartasDesordenadas = [];

/* let drawDesactivado = function() {
  this.disabled = true;
};
botónDraw.addEventListener("click", drawDesactivado, false); */

let botónDraw = document.querySelector("#draw");

function drawCartas() {
  /* captura el valor pasado por el input */
  cartasDesordenadas = [];
  let inputNumber = document.querySelector("#input-número");
  let inputNumberValue = inputNumber.value;
  console.log("Input pasado", inputNumberValue);
  for (let i = 1; i <= inputNumberValue; i++) {
    cartasDesordenadas.push(generarCartas());
  }
  console.log("Recibo:", cartasDesordenadas);
}

function generarCartas() {
  /*  Dibuja las cartas según valor pasado en el input */
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
  let número = números[númeroRandom];
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
    número: número,
    palo: palo
  };
  console.log(objetoCarta);

  if (palo == "♦" || palo == "♥") {
    paloSuperior.style.color = "red";
    paloInferior.style.color = "red";
    númeroCentral.style.color = "red";
  } else {
    paloSuperior.style.color = "black";
    paloInferior.style.color = "black";
    númeroCentral.style.color = "black";
  }

  console.log("soy la carta");
}

botónDraw.addEventListener("click", drawCartas);

/* function sort(arr = []) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let result = sort([...números]);
console.log("Método Bubble Sorting", result);
console.log("cartas sin ordenar", números);
 */
