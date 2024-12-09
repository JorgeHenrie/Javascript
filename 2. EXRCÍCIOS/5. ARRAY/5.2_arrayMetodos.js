const pilotos = [ 'Vetel', 'Massa', 'Hamilton', 'Sena']
pilotos.pop() //remove último elemento do array
console.log(pilotos)

pilotos.push('Glock') //adiciona elemtno no final do array
console.log(pilotos)

pilotos.shift() //remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Schummacher')//adiciona elemento na primeira posição do array 0
console.log(pilotos)

//Adiciona a partir do splice
pilotos.splice(2, 0, 'botas' , 'massa') //Adiciono no indice 2, não removo ninguém, e adiciono botas e massa
console.log(pilotos)

//remove a partir do splice
pilotos.splice(3, 1 ) //No índice 3 remove um único elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //retorna novo array
console.log(algunsPilotos1)