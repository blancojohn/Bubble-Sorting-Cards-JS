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

let botónDraw = document.querySelector("#draw");

botónDraw.addEventListener("click", drawCartas);

function drawCartas() {
  let inputNúmero = document.querySelector("#input-número");
  let inputNúmeroValue = inputNúmero.value;
  let i = 1;
  let arrayDeCartas = [];
  while (i++ <= inputNúmeroValue) {
    arrayDeCartas.push(generarCartas());
  }
}

let drawDesactivado = function() {
  this.disabled = true;
};
botónDraw.addEventListener("click", drawDesactivado, false);

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
