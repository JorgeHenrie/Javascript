Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de honra')
    }else if(nota.entre(7, 8.99)){
        console.log('aprovado')
    }else if(nota.entre(4, 5)){
        console.log('reprovado');
    }
}

imprimirResultado(10);
imprimirResultado(7)
imprimirResultado(4)