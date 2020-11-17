var cuadrito = document.getElementById("dibujo");
var papel = cuadrito.getContext("2d");
var x, y, estado;

//capturar los eventos,cuando sueltas click, cuando mueves el mouse, cuando presionas click
cuadrito.addEventListener("mousedown", presionarMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);
cuadrito.addEventListener("mouseup", soltarMouse);

function presionarMouse(evento) {
    //click presionado 
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarMouse(evento) {

    var color = "blue";

    // solo se dibujara si esta el click del mouse presionado
    if (estado == 1) {
        dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}


function soltarMouse(evento) {
    // click suelto
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}