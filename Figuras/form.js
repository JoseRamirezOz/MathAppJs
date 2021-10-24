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

    const resultadoCuadrado = document.getElementById("resultadoCuadrado")
    resultadoCuadrado.innerText = `El perimetro es:  ${perimetro}`;
}

// MOSTRAR EN PANTALLA AREA CUADRADO

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    
    const resultadoCuadrado = document.getElementById("resultadoCuadrado")
    resultadoCuadrado.innerText = `El area es:  ${area}`;
}

/*------------------------------------------------------
        TRIANGULO
-------------------------------------------------------*/
function areaTriangulo(base,altura){
    return (base*altura/2);
}

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
    
    const resultadoTriangulo = document.getElementById("resultadoTriangulo")
    resultadoTriangulo.innerText = `El area es:  ${area}`;

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
    
    const resultadoTriangulo = document.getElementById("resultadoTriangulo")
    resultadoTriangulo.innerText = `El perimetro es:  ${perimetro}`;
}


/*------------------------------------------------------
        CIRCULO
-------------------------------------------------------*/
function areaCirculo(radio){
    return (radio*radio*Math.PI);
}

function perimetroCirculo(radio){
    return (2*Math.PI*radio);
}

////----------------------------------------------
function calcularAreaCirculo(){
    const input__radio = document.getElementById("radio");
    const value__radio = input__radio.value;

    const area = areaCirculo(value__radio);
    
    const resultadoCirculo = document.getElementById("resultadoCirculo")
    resultadoCirculo.innerText = `El area es:  ${area}`;
}

function calcularPerimetroCirculo(){
    const input__radio = document.getElementById("radio");
    const value__radio = input__radio.value;

    const perimetro = perimetroCirculo(value__radio);
    
    const resultadoCirculo = document.getElementById("resultadoCirculo")
    resultadoCirculo.innerText = `El perimetro es:  ${perimetro}`;
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
        
        const rresultadoTrianguloIsoceles = document.getElementById("resultadoTrianguloIsoceles")
        resultadoTrianguloIsoceles.innerText = `La altura es:  ${altura}`;
    }