function imprime(){
    for (let i = 1; i<=11; i++){
        console.log(`${i}º Hello, Wolrd!`);
    }
}

function imprimeWhile(){
    contador = 0;

    while(contador < 12){
        console.log(`${contador}º Hello, Wolrd!`);
        contador ++
    }
    return ''
}

console.log(imprime())
console.log(imprimeWhile())