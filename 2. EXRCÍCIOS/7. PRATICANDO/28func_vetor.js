function imparPar(numeros){
    contPar = 0;
    contImpar = 0;

    for (let i = 1; i <= numeros.length; i++){
        if (i % 2 == 0){
            contPar+=1;
        }else{
            contImpar+=1;
        }
       
    }
    console.log(`Quantidade de números pares ${contPar} e ímpares ${contImpar}`);
    return '';

}

numeros = [10, 20, 30, 31, 44, 45, 11, 23, 37];
console.log(imparPar(numeros))
