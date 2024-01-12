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
let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palos = ["♦", "♥", "♠", "♣"];

let botónDraw = document.querySelector("#draw");
botónDraw.addEventListener("click", generarCartas);

function generarCartas() {
  let mostrarCartas = document.querySelector("#mostrar-cartas");

  let carta = document.createElement("div");
  carta.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let paloSuperior = document.createElement("div");
  paloSuperior.classList.add("position-absolute", "top-0", "start-0");
  paloSuperior.innerHTML = "♦";

  let númeroCentral = document.createElement("div");
  númeroCentral.innerHTML = "6";

  let paloInferior = document.createElement("div");
  paloInferior.classList.add("position-absolute", "bottom-0", "end-0");
  paloInferior.innerHTML = "♦";

  mostrarCartas.appendChild(carta);
  carta.appendChild(cardBody);
  cardBody.appendChild(paloSuperior);
  cardBody.appendChild(númeroCentral);
  cardBody.appendChild(paloInferior);

  console.log("soy la carta");
}
