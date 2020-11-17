var granjplat = document.getElementById("villa-platzi");
var papel = granjplat.getContext("2d");
var cantidad = aleatorio(5, 9)
var mensj = document.getElementById("mensaje");
var xini = 15;
var yini = 15;

//objetos para aplicar la función que hará que mantenga su lugar
var xVaca = new Array();
var yVaca = new Array();

var xPollo = new Array();
var yPollo = new Array();

//objetos que se imprimiran en pantalla
var fondo = {
    url: "tile.png",
    cargaOK: false,
}
var vaca = {
    url: "vaca.png",
    cargaOK: false
}
var pollo = {
    url: "pollo.png",
    cargaOK: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}

//objeto para mover al cerdo
var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
}

//capturar el evento de presionar las teclas para mover al cerdo
document.addEventListener("keydown", moverCerdo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar()
}

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarVaca() {
    vaca.cargaOK = true;
    mantenerPosicion();
}

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarPollo() {
    pollo.cargaOK = true;
    mantenerPosicion();
}

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar()
}

//para mover al cerdo
function moverCerdo(evento) {
    var movimiento = 10;

    //condiciones para mover al cerdo por la pantalla
    switch (evento.keyCode) {
        case teclas.UP:
            papel.drawImage(cerdo.imagen, xini, yini - movimiento);
            yini -= movimiento;
            dibujar();
            break;

        case teclas.DOWN:
            papel.drawImage(cerdo.imagen, xini, yini + movimiento);
            yini += movimiento;
            dibujar();
            break;

        case teclas.LEFT:
            papel.drawImage(cerdo.imagen, xini - movimiento, yini);
            xini -= movimiento;
            dibujar();
            break;

        case teclas.RIGHT:
            papel.drawImage(cerdo.imagen, xini + movimiento, yini);
            xini += movimiento;
            dibujar();
            break;
        default:
            var doc = 1;
    }
    //para mostrar el mensaje si oprime una tecla diferente de arriba,abajo,izquierda,derecha.
    if (doc == 1) {
        mensj.innerHTML = "presione otra tecla";
    } else {
        mensj.innerHTML = "";
    }
}

//crear un número aleatorio para las posiciones
function aleatorio(min, max) {
    var resultado;

    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

//mantener posición
function mantenerPosicion() {
    if (vaca.cargaOK) {
        for (var i = 0; i < cantidad; i++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            xVaca[i] = x;
            yVaca[i] = y;
        }
    }
    if (pollo.cargaOK) {
        for (var i = 0; i < cantidad; i++) {
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            x = x * 40;
            y = y * 40;
            xPollo[i] = x;
            yPollo[i] = y;
        }
    }
    dibujar();
}

//imprimir en pantalla las imágenes cuando estén cargadas
function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        for (var i = 0; i < cantidad; i++) {
            papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
        }
    }
    if (pollo.cargaOK) {
        for (var i = 0; i < cantidad; i++) {
            papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
        }
    }
    if (cerdo.cargaOK) {
        papel.drawImage(cerdo.imagen, xini, yini)
    }
}