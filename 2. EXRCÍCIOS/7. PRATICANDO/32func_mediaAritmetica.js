function media(numeros){

    soma = 0;
    media;

    for (let i = 0; i <= numeros.length; i++){
        if (numeros[i] > 0){
            soma+=numeros[i];
            media = soma / numeros.length;
        }
    }
    console.log(`A média aritmética do vetor é ${media.toFixed(2)}`)
    return ''

}

numeros = [ 10, 10, 10, 40]
console.log(media(numeros))
