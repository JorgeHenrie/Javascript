//armazenando uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 4);


//armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b;
}

console.log(soma(1, 2));

//retorno implícito
const subtracao = (a, b) => a - b;