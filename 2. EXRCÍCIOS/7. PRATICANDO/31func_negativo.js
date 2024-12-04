function negativo(numeros){
    cont = 0;

    for (let i = 0; i <= numeros.length; i++){
        if (numeros[i] < 0){
            cont++;
        }
    }
    console.log(`Posssui ${cont} números negativos`)
    return '';

}

numeros = [ 2, 3, 4, 11, 24, 14, 16, 29, 19, 20, 10, 13, 7, 8, -1, -2, -4, -8]
console.log(negativo(numeros))