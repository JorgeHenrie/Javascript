/* No map transforma-se um array original em um novo array. Entende-se que precisou ou transformou o array origianl, então
estamos falando do map. Exemplo: array de números, que com map retorno o dobro. Veja que é um novo array
obs: não altera o array original. Ele gera um novo array

*/

const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function (e) { // o "e" é cada elemtno dentro do array
    return e * 2;
})
console.log(resultado)
