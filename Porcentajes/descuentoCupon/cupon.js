//FUNCION PRINCIPAL GENERADORA DEL DESCUENTO //////////
function calcularDescuento(precio,cupon){
    let descuento;
    let precioF;
    let error = "Coloca un cupon valido";
    
    let verano = "v3r4n0";
    let buenFin = "bu3nF1n";
    let navidad = "n4v1d4d"; 
    
    let porcentajeD1 = .15;
    let porcentajeD2 = .30;
    let porcentajeD3 = .25;
 
    if (cupon==verano){
    
        descuento = precio * porcentajeD1;
        precioF = precio - descuento;
        return precioF;
    
    } else if(cupon==buenFin){
    
        descuento = precio * porcentajeD2;
        precioF = precio - descuento;
        return precioF;
    
    } else if(cupon == navidad){
    
        descuento = precio * porcentajeD3;
        precioF = precio - descuento;
        return precioF;
    
    } else{
        return error;
    }
    
} 


// FUNCION SECUNDARIA, CONEXION CON HTML

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const discountPrice = document.getElementById("InputDiscount");
    const discountValue = discountPrice.value;

    const pFinal = calcularDescuento(priceValue,discountValue);
    const resultP = document.getElementById("ResultP")
    resultP.innerText = `
    Wow! con tu cupon tu producto costara: \n $  ${pFinal}`;

}