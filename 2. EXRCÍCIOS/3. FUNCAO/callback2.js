const notas = [7.7, 6.5, 5.2, 9.6, 4.0, 10, 8, 3];

//let menorQueSete = notas.filter((nota) => nota < 7); 

/* 

filtra os elementos de um array com base em um critério(menor que 7).
nota está comportando como uma função, e como está sendo passada como argumento podemos afirmar que é callback.
nota: ela está representando cada elemento do array notas */

notasBaixas = notas.filter((nota) => nota < 7);

console.log(notasBaixas);

