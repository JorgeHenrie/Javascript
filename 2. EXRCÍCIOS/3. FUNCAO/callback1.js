const fabricantes = ["Audi", "BMW", "Porsche"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir) //passando uma função como argumento para foreach, que é a definição de callback. 
console.log(typeof fabricantes)


/* O código apresentado utiliza o método forEach para iterar sobre o array
fabricantes e executar a função imprimir para cada elemento do array. */