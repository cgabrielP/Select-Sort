const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const tipos = ["♥", "♦", "♠ ", "♠"];

let arrCartas = [];

let newObject = {};

let i = "";

const inputUsuario = () => {
  let input = document.getElementById("inputUsuario");
  return parseInt(input.value);
};

let input = document.getElementById("inputUsuario");
input.addEventListener("change", inputUsuario);

let seccionCarta = document.getElementById("sec-generar");
let botonGenerar = document.getElementById("btnGenCarta");

botonGenerar.addEventListener("click", () => {
  let resultado0 = dibujarCarta(arrCartas);
});

function dibujarCarta() {
  arrCartas = [];
  seccionCarta.innerHTML = "";
  let contenedorCarta = document.createElement("div");

  for (i = 0; i < inputUsuario(); i++) {
    let sortNumbers = valores[Math.floor(Math.random() * 13)];
    let sortTipos = tipos[Math.floor(Math.random() * 4)];

    let color = sortTipos === "♥" || sortTipos === "♦" ? "red" : "black";

    let objCarta = {};

    objCarta.numero = sortNumbers;
    objCarta.tipo = sortTipos;
    arrCartas.push(objCarta);

    let nuevaCarta = document.createElement("div");
    let divNumero = document.createElement("div");
    let divTipo = document.createElement("div");
    let divTipo2 = document.createElement("div");

    divTipo.style.color = color;
    divTipo2.style.color = color;

    divNumero.innerHTML = cambiarValor(objCarta.numero);
    divTipo.innerHTML = objCarta.tipo;
    divTipo2.innerHTML = objCarta.tipo;

    contenedorCarta.classList.add("section-cartas");
    nuevaCarta.classList.add("carta");
    divNumero.classList.add("carta-numeros");
    divTipo.classList.add("tipo-arriba");
    divTipo2.classList.add("tipo-abajo");

    nuevaCarta.append(divNumero, divTipo, divTipo2);
    contenedorCarta.appendChild(nuevaCarta);
  }

  seccionCarta.append(contenedorCarta);
}

function cambiarValor(valor) {
  switch (valor) {
    case 1:
      return "A";
    case 10:
      return "10";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return valor;
  }
}

let secAlgoritmo = document.getElementById("sec-algoritmo");

let botonOrdenar = document.getElementById("btnClasCarta");
botonOrdenar.addEventListener("click", () => {
  secAlgoritmo.innerHTML = "";
  selectSort(arrCartas);
});

function selectSort(arr) {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min].numero > arr[i].numero) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
    dibujarCartaOrdenadas(arr);
  }
  return arr;
}

function dibujarCartaOrdenadas(arr) {
  let contenedorCarta = document.createElement("div");
  for (i = 0; i < arr.length; i++) {
    contenedorCarta.classList.add("section-cartas2");

    let nuevaCarta = document.createElement("div");
    let divNumero = document.createElement("div");
    let divTipo = document.createElement("div");
    let divTipo2 = document.createElement("div");

    nuevaCarta.classList.add("carta");
    divNumero.classList.add("carta-numeros");
    divTipo.classList.add("tipo-arriba");
    divTipo2.classList.add("tipo-abajo");

    let color = arr[i].tipo === "♥" || arr[i].tipo === "♦" ? "red" : "black";
    divTipo.style.color = color;
    divTipo2.style.color = color;

    divNumero.innerHTML = cambiarValor(arr[i].numero);
    divTipo.innerHTML = arr[i].tipo;
    divTipo2.innerHTML = arr[i].tipo;

    nuevaCarta.append(divNumero, divTipo, divTipo2);
    contenedorCarta.appendChild(nuevaCarta);
  }

  secAlgoritmo.append(contenedorCarta);
  return arr;
}
