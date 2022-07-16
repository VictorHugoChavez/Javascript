var nombre;
nombre = "Hola mundo";
var puntuacion = 2;
var record;
record = 6000;
alert(5 + 6 * 3);

var precuoUnidad, cantidad, total;

precuoUnidad = 24;
cantidad = 100;
total = precuoUnidad * cantidad;

alert("El total de mi valores es " + total);


var nombre = prompt("Intro tu nombre por favor");
var apellido = prompt("Introduce tu apellido por favor");
var edad = prompt("Introduce tu edad");
var restado = prompt("Cuantos años deseas quitarte");

edad -= restado;

document.write("<p>");
document.write(nombre + " " + apellido + " con una edad " + edad);
document.write("</p>");

//////////////////////

var articulos = ["zapatillas", "pantalon", "camiseta", "calcetines"];
var articulosz = new Array("zapatillas", "pantalon", "camiseta", "calcetines")

alert(articulos[1]);
alert(articulosz[3]);

alert(articulos.length);
articulos.push("balon");
articulos()