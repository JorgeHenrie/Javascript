function maiorMenor(numeros){
    maior = numeros[0];
    menor = numeros[0];

    for (let i = 0; i<=numeros.length; i++){
        if ( numeros[i] > maior){
            maior = numeros[i];
        }
        if (numeros[i] < menor){
            menor = numeros[i];
        }
    }
    console.log(`Maior número: ${maior} e o menor é ${menor}`)
    return ''
}


numeros = [ 2, 3, 4, 11, 24, 14, 16, 29, 19, 20, 10, 13, 7, 8]
console.log(maiorMenor(numeros))