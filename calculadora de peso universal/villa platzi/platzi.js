var vp = document.getElementById("villa-platzi");
var papel = vp.getContext("2d");

//creamos los objetos de las imágenes

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};


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

function dibujar() {
    if (fondo.cargaOK == true) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK == true) {
        papel.drawImage(vaca.imagen, 100, 100);
    }
}

//sacar un número aleatorio.
function aleatorio(min, max) {
    var resultado;

    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
console.log(papel);