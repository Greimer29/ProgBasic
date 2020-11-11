var vp = document.getElementById("villa-platzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

//creamos los objetos de las imágenes

var fondo = {
    url: "fondo.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarFondo() {
    fondo.cargaOK = true;
}

function dibujar() {
    papel.drawImage(fondo, 0, 0);
}

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarvaca);

function dibujarvaca() {
    papel.drawImage(vaca, 10, 20);
}


//sacar un número aleatorio.
function aleatorio(min, max) {
    var resultado;

    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}