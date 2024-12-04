function intervaloN(numeros){
    cont=0;
    contFora = 0;

    for (let i = 0; i <= numeros.length; i++){
        if ( i >= 10 && i <= 20){
            cont++;
        }else{
            contFora++;
        }
    }
    console.log(`Dentro do intervalo: ${cont} e fora do intervalo ${contFora}`);
    return '';

}

numeros = [1, 2, 3, 4, 11, 24, 14, 16, 29, 19, 20, 10, 13, 7, 8]
console.log(intervaloN(numeros))