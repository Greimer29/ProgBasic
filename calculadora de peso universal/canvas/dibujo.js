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

var can = document.getElementById("elpepe");
var hoja = can.getContext("2d");

function dele() {
    hoja.beginPath();
    hoja.strokeStyle = "brown";
    hoja.moveTo(0, 0);
    hoja.lineTo(300, 300);
    hoja.stroke();
    hoja.closePath();
}

dele();