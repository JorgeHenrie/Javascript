const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado';
console.log(resultado(7.1));
console.log(resultado(6));

// ele retorna um dos valores

/* Ele é chamado de "t  ernário" porque trabalha com três partes: uma condição,
um valor a ser retornado se a condição for verdadeira, e outro valor a ser retornado se a condição for falsa. */