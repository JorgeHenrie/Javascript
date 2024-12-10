function converterIdadeParaDias(idade){
    resultado = idade * 365;
    return resultado;
}


function alternativa(idade){
    const ano = 365;
    return ano * idade;
}

console.log(converterIdadeParaDias(25))
console.log(alternativa(25));

