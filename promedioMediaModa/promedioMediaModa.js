/*-------------------------------------------------------
CALUCULAR LA MEDIA ARITMETICA
--------------------------------------------------------*/
function calcularMediaAritmetica(lista){
    // let sumaLista = 0; 
    // for (let i = 0 ; i < lista.length ; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/*-------------------------------------------------------
CALCULAR LA MEDIANA
--------------------------------------------------------*/
function calcularMediana(arrayMediana){
const listaMediana= arrayMediana;
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
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];
  




