const imprimirResultado = function(nota){
    if (nota > 7){
        console.log('aprovado');
    }else{
        console.log('Reprovado');
    }
}

imprimirResultado(5);
imprimirResultado('opa'); //JS é fraca em tipagem. Ele verifica que é falso, e imprime o reprovado, mas foi passado numa string.