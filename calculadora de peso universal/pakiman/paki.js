var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pocacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

/*//la vaca
var cauchin = new Pakiman("cauchin", 100, 30);
//el pollo
var pocacho = new Pakiman("Pocacho... segun dice que la imagen no ha sido encontrada pero ya la descargué 10 veces", 80, 50);
//el cerdo
var tocinauro = new Pakiman("tocinauro", 150, 40)*/

//puedo instanciar una clase en la misma inserción que le hago...
//al array.

var coleccion = [];

coleccion.push(new Pakiman("cauchin", 100, 30));
coleccion.push(new Pakiman("Pocacho", 80, 50));
coleccion.push(new Pakiman("tocinauro", 150, 40));

for (var grei of coleccion) {
    grei.mostrar();
}