function calcularDescuento(precio,descuento){
    let descontar = precio * descuento;
    let pFinal = precio - descontar;

    return pFinal;
    // console.log(`El precio final a pagar es: ${pFinal}`)
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const discountPrice = document.getElementById("InputDiscount");
    const discountValue = discountPrice.value;

    const pFinal = calcularDescuento(priceValue,discountValue);
    const resultP = document.getElementById("ResultP")
    resultP.innerText =`El precio con descuento es: ${pFinal}`;
}