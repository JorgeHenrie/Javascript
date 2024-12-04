function restoDivisao(dividendo, divisor){
    if (divisor > 0){
        resto = dividendo % divisor;
        return `Resultado da divisão: ${dividendo} / ${divisor} = ${dividendo / divisor} e o resto da divisao é ${resto}`;
        
    }else{
        return 'Divisor deve ser maior que zero!';

    }
}
console.log(restoDivisao(9,3))
console.log(restoDivisao(10,3))
console.log(restoDivisao(1,0))

/* 
uma função que não retorna nada explicitamente devolve undefined.O problema ocorre porque você está utilizando console.log 
dentro do return. Embora isso funcione tecnicamente, o valor retornado pela função será o retorno de console.log,
que é sempre undefined. O ideal é não usar o console.log com o return

*/