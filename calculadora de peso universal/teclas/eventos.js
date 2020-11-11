var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area-de-dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujar("red", 149, 149, 151, 151, papel);

function dibujar(color, xini, yini, xfin, yfin, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "blue";
    var movimiento = 10;

    switch (evento.keyCode) {
        case teclas.UP:
            dibujar(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujar(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujar(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujar(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            document.write('Ingrese otra tecla')
            break;
    }
}