//Em Js a tipagem de variáveis é fraca.
let qualquer = 'Legal';
console.log(typeof qualquer);


qualquer = 3;
console.log(typeof qualquer);


/* 

o JavaScript é uma linguagem de tipagem fraca e dinâmica. Isso significa que:
Tipagem fraca: Não exige que o tipo de uma variável seja explicitamente declarado e permite conversões implícitas entre tipos diferentes. Por exemplo:

let valor = 5;         // Aqui, 'valor' é um número.
valor = "texto";       // Agora, 'valor' é uma string.
console.log(valor);    // Saída: "texto"

O tipo da variável pode mudar durante a execução.

Tipagem dinâmica: O tipo de dado é determinado em tempo de execução, e não em tempo de compilação. Isso é diferente de linguagens de tipagem estática, como Java ou C#, onde o tipo deve ser definido no momento da declaração.

*/