function calculadora(numero1,  operacao, numero2){
    let resultado;
    switch (operacao){
        
        case '+':
            resultado = numero1 + numero2;
            console.log(`Resultado da soma: ${resultado.toFixed(2)}`);
            break;
        case '-':
            resultado = numero1 - numero2;
            console.log(`Resultado da subtração: ${resultado.toFixed(2)}`);
            break;
        case '/':
            resultado = numero1 / numero2;
            console.log(`Resultado da divisão: ${resultado.toFixed(2)}`);
            break;
        case '*':
            resultado = numero1 * numero2;
            console.log(`Resultado da multiplicação: ${resultado.toFixed(2)}`);
            break;
        default:
            console.log('operação inválida!');
    }
    return '';
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(10, '/', 3));