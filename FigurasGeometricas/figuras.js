

/*---------PERIMETRO Y AREA DE UN CUADRADO------*/

 var ladoCuadrado = prompt("Ingresa el valor de uno de los lados del cuadrado");

document.write(
    "El cada lado del cuadrado mide " + ladoCuadrado + " cm"
    +
    " El area de tu cuadrado es: " + ladoCuadrado*ladoCuadrado + " cm"
    +
    " y el perimetro  es: " + ladoCuadrado*4 + " cm cuadrados"
    );

/*----PERIMETRO Y AREA DE UN TRIUANGULO----*/


var trianguloL__uno = parseInt(prompt("Cual es el valor del primer lado del triangulo"));
var trianguloL__dos = parseInt(prompt("Cual es el valor del segundo lado del triangulo"));
var trianguloL__base = parseInt(prompt("Cual es el valor de la base del triangulo"));
var trianguloL__h = parseInt(prompt("Cual es el valor de la altura del triangulo"));

document.write(
    "El area de tu triangulo es " + trianguloL__base*trianguloL__h/2 + " cm cuadrados"
    +
    " y su perimetro es " + (trianguloL__uno + trianguloL__dos + trianguloL__base) + " cm"
    );


/*PERIMETRO Y AREA DE UN CIRCULO*/ 

var radio = parseInt(prompt("Cual es el radio de tu circulo"));

document.write(
    "El area de tu circulo es " + 
    (radio*radio * Math.PI ) + 
    " Cm^2" + 
    " y su Perimetro es: " + 
    (2*Math.PI*radio) +
    " Cm^2"
);



