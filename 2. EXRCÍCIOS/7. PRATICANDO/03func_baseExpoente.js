// function exponencial(base, expoente){
//     return Math.pow(base, expoente);
// }

// console.log(exponencial(2,3))

function potencia(base, expoente){
    resultado = 1;

    if (expoente > 0){
        for (let i = 0; i < expoente; i++){
            console.log(`Pot: ${resultado *= base}`);
        }
    }
}

console.log(potencia(2,5))