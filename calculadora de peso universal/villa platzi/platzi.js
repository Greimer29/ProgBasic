var vp = document.getElementById("villa-platzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(5, 25)

//creamos los objetos de las imágenes

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargarOK: false
}

var cerdo = {
    url: "cerdo.png",
    cargarOK: false
}


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarvaca);

function cargarvaca() {
    vaca.cargaOK = true;
    dibujar();
}

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarpollo);

function cargarpollo() {
    pollo.cargarOK = true;
    dibujar();
}

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarcerdo);

function cargarcerdo() {
    cerdo.cargarOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK == true) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK == true) {
        for (let a = 0; a < cantidad; a++) {
            // para acomodar las vacas sin que se encimen 
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
        for (let a = 0; a < cantidad; a++) {
            // para acomodar las vacas sin que se encimen 
            var x = aleatorio(0, 20);
            var y = aleatorio(0, 20);
            var x = x * 50;
            var y = y * 50;
            papel.drawImage(pollo.imagen, x, y);
        }
        for (let a = 0; a < cantidad; a++) {
            // para acomodar las vacas sin que se encimen 
            var x = aleatorio(0, 40);
            var y = aleatorio(0, 40);
            var x = x * 70;
            var y = y * 70;
            papel.drawImage(cerdo.imagen, x, y);
        }

    }
}

//sacar un número aleatorio.
function aleatorio(min, max) {
    var resultado;

    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}