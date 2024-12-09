const aprovados = ['Jorge', 'Bia', 'João']
console.log(aprovados)
console.log(aprovados[0])

aprovados[3] = 'Duda'
aprovados.push('Helô')
console.log(aprovados.length)

aprovados[9] = 'Jr' //Adicionei na posição 9 o elemento Jr, o intervalo ficará definido como undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados) //altera o array no qual chamei a função sort. Não devolve um novo array

delete aprovados[1]
console.log(aprovados)