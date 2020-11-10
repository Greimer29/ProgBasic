var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");

boton.addEventListener('click', dibujoPorClick);

function dibujoPorClick() {

    var xxx = parseInt(texto.value);
}

var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");

/*lienzo.beginPath(); //iniciar o arrancar un trazo, posicionar el lápiz.
lienzo.strokeStyle = "red"; //color de lalínea pude ser estilo.
lienzo.moveTo(100, 100); //posición donde iniciará la línea.
lienzo.lineTo(200, 200); //función de trazar linea de punto inicial a este nuevo.
lienzo.stroke(); //función que ejecuta el trazar la línea.
lienzo.closePath(); //instrucción de fin, levantar el lapiz.*/

function dibujar(color, xini, yini, xfin, yfin) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}

dibujar("red", 10, 300, 220, 10);

//elmio
var can = document.getElementById("elmio");
var hoja = can.getContext("2d");

var limite = 300;
var line = 0;

function dele(color, xini, yini, xfin, yfin) {
    hoja.beginPath();
    hoja.strokeStyle = color;
    hoja.moveTo(xini, yini);
    hoja.lineTo(xfin, yfin);
    hoja.stroke();
    hoja.closePath();
}

for (let a = 0; a < limite; a++) {
    let yini, xfin;
    yini = 10 * a;
    xfin = 10 * (a + 1);
    dele("blue", 0, yini, xfin, 300);
}
for (let a = 0; a < limite; a++) {
    let xini, yfin
    xini = 10 * (a + 1);
    yfin = 300 - (10 * a);
    dele("blue", xini, 300, 300, yfin);
}
for (let a = 0; a < limite; a++) {
    yini = 10 * a;
    xfin = 10 * (a + 1);
    dele("blue", 0, yini, xfin, 300);
}
for (let a = 0; a < limite; a++) {
    yini = 10 * a;
    xfin = 10 * (a + 1);
    dele("blue", 0, yini, xfin, 300);
}

//el suyo
var f = document.getElementById("elsuyo");
var lienzo2 = f.getContext("2d");

var lineas = 30;
var l = 0;
var yi, xf;

/*
for(l = 0; l < lineas; l++){
    yi = 10 * l;
    xf = 10 *(l+1);
    dibujarLinea("grey", 0, yi, xf, 300);
}
*/

while (l < lineas) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("grey", 0, yi, xf, 300);
    l = l + 1;
}

dibujarLinea("black", 1, 1, 1, 299);

function dibujarLinea(color, xini, yini, xfin, yfin) {
    lienzo2.beginPath();
    lienzo2.strokeStyle = color;
    lienzo2.moveTo(xini, yini);
    lienzo2.lineTo(xfin, yfin);
    lienzo2.stroke();
    lienzo2.closePath();
}