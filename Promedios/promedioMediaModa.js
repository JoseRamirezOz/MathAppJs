/*-------------------------------------------------------
CALUCULAR LA MEDIA ARITMETICA
--------------------------------------------------------*/
function calcularMediaAritmetica(lista){

    //RECIBIENDO DATOS  
    let strHTML = lista;
    let divElement = strHTML.split(',');
    
    let arrayNumb = divElement.map(function(e){
      return parseInt(e,10)
    });

    //CALCULANDO LA MEDIA
    const sumaLista = arrayNumb.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / arrayNumb.length;
    return Math.round(promedioLista);
}


/*-------------------------------------------------------
CALCULAR LA MEDIANA
--------------------------------------------------------*/
function calcularMediana(arrayMediana){
   //RECIBIENDO DATOS  
   let strHTML = arrayMediana;
   let divElement = strHTML.split(',');
   
   let arrayNumb = divElement.map(function(e){
     return parseInt(e,10)
   });

const listaMediana= arrayNumb;
let resultadoImpar;
let mediana;
let resultadoParV1;
let resultadoParV2;

    listaMediana.sort(function(a,b){
        return a-b;
    });
    
    
    if (listaMediana.length % 2 === 1){
        resultadoImpar  = (listaMediana.length+1)/2;
        mediana = listaMediana[resultadoImpar-1];

        return mediana;
    } else if (listaMediana.length % 2 === 0){
        resultadoParV1 = listaMediana[(listaMediana.length)/2-1];
        resultadoParV2 = listaMediana[(listaMediana.length)/2+1-1];
        mediana = (resultadoParV1+resultadoParV2)/2;

        return mediana;
    }
    
    
}


/*-------------------------------------------------------
CALUCULAR LA MODA (DATO QUE MAS SE REPITE)
--------------------------------------------------------*/
function calcularModa(listaModa){
    //RECIBIENDO DATOS  
    let strHTML = listaModa;
    let divElement = strHTML.split(',');
    
    let arrayNumb = divElement.map(function(e){
      return parseInt(e,10)
    });
  

  return arrayNumb.sort((a,b) =>
       arrayNumb.filter(v => v===a).length
     - arrayNumb.filter(v => v===b).length
  ).pop();  
}






/*-------------------------------------------------------
UNIENDO HTML Y JAVASCRIPT
--------------------------------------------------------*/
function ButtonMedia(){
  const inputArray = document.getElementById("InputArray");
  const arrayValues = inputArray.value;

  const resultadoMedia = calcularMediaAritmetica(arrayValues);
  const resulMedia = document.getElementById("rMedia")

  resulMedia.innerText = `La media es ${resultadoMedia}`;
}

function ButtonMediana() {
  //TRAYENDO HTML Y GUARDANDO EN VARIABLE
  const inputDataMediana = document.getElementById("Input-Data--Mediana")
  //TARAYENDO EL VALOR ALOJADO EN HTML
  const valueDataMediana = inputDataMediana.value
  //CREANDO EL RESULTADO
  const calculandoMediana = calcularMediana(valueDataMediana)
  //TRAYENDO LA SALIDA EN HTML
  const salidaMediana = document.getElementById("outputMediana")
  //INGRESANDO EL TEXTO EN HTML
  salidaMediana.innerText = `La mediana es: ${calculandoMediana}`
}

function ButtonModa(){
   //TRAYENDO HTML Y GUARDANDO EN VARIABLE
   const inputDataModa = document.getElementById("Input-Data--Moda")
   //TARAYENDO EL VALOR ALOJADO EN HTML
   const valueDataModa = inputDataModa.value
   //CREANDO EL RESULTADO
   const calculandoModa = calcularModa(valueDataModa)
   //TRAYENDO LA SALIDA EN HTML
   const salidaModa = document.getElementById("outputModa")
   //INGRESANDO EL TEXTO EN HTML
   salidaModa.innerText = `La moda es: ${calculandoModa}`
}