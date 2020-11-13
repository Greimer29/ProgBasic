class Billetes {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero() {

    t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja) {

        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billetes(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles)
        }
    }
    if (dinero > 0) {
        result.innerHTML = "No puedo darte esa cantidad";
    } else {
        for (var e of entregado) {
            if (e.entregado > 0) {
                result.innerHTML += e.cantidad + " Billetes de $ " + e.valor + "<br>";

            }
        }
    }
}

var caja = [];
var entregado = [];

//puedes agregarle másbilletes con su valor así mismo.
caja.push(new Billetes(50, 4));
caja.push(new Billetes(20, 2));
caja.push(new Billetes(10, 2));

var dinero = 0;
var div = 0;
var papeles = 0;

var result = document.getElementById("resultado");


var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
console.log(result);