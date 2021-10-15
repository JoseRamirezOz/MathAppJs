//FUNCION DE PERIMETRO DE CUADRADO
function perimetroCuadrado(lado){
    return lado*4;
}

// FUNCION DE AREA DE CUADRADO
function areaCuadrado(lado){
    return lado*lado;
}

/////////////////////////////////////


//MOSTRAR EN PANTALLA PERIMETRO CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

// MOSTRAR EN PANTALLA AREA CUADRADO

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

///////////////////////////////

// FUNCION AREA TRIANGULO

function areaTriangulo(base,altura){
    return (base*altura/2);
}

// FUNCION PERIMETRO TRIANGULO

function perimetroTriangulo(ladoUno,ladoDos,base){
    return (Number(ladoUno)+Number(ladoDos)+Number(base));
}

// MOSTRAR EN PANTALLA AREA TRIANGULO

function calcularAreaTriangulo(){
    const input__ladoUno = document.getElementById("ladoUno");
    const input__ladoDos = document.getElementById("ladoDos");
    const input__base = document.getElementById("base");
    const input__altura = document.getElementById("altura");

    const value__ladoUno = input__ladoUno.value;
    const value__ladoDos = input__ladoDos.value;
    const value__base = input__base.value;
    const value__altura = input__altura.value;

    const area = areaTriangulo(value__base,value__altura);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const input__ladoUno = document.getElementById("ladoUno");
    const input__ladoDos = document.getElementById("ladoDos");
    const input__base = document.getElementById("base");
    const input__altura = document.getElementById("altura");

    const value__ladoUno = input__ladoUno.value;
    const value__ladoDos = input__ladoDos.value;
    const value__base = input__base.value;
    const value__altura = input__altura.value;

    const perimetro = perimetroTriangulo(value__ladoUno,value__ladoDos,value__base);
    alert(perimetro);
}






////////////////////////////////

// FUNCION AREA DE UN CIRCULO
function areaCirculo(radio){
    return (radio*radio*Math.PI);
}

// FUNCION PERIMETRO DE UN CIRCULO 
function perimetroCirculo(radio){
    return (2*Math.PI*radio);
}

////----------------------------------------------
function calcularAreaCirculo(){
    const input__radio = document.getElementById("radio");
    const value__radio = input__radio.value;

    const area = areaCirculo(value__radio);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input__radio = document.getElementById("radio");
    const value__radio = input__radio.value;

    const perimetro = perimetroCirculo(value__radio);
    alert(perimetro);
}


//-------------------------------------------------------

    function alturaTrianguloIsoceles(ladoSemejante,hipotenusa){
        var a = parseInt(ladoSemejante)*parseInt(ladoSemejante);
        var b = parseInt(hipotenusa)*parseInt(hipotenusa) /2;
        var resultadoAB = (a-b);
        var h = Math.sqrt(resultadoAB);
        return h;
    }   



    function calcularAlturaTIsoceles(){
        const input__ladoSemejante = document.getElementById("ladoSemejante");
        const input__hipotenusa = document.getElementById("hipotenusa");

        const value__ladoSemejante = input__ladoSemejante.value;
        const value__hipotenusa = input__hipotenusa.value;
    
        const altura = alturaTrianguloIsoceles(value__ladoSemejante,value__hipotenusa);
        alert(altura);
    }