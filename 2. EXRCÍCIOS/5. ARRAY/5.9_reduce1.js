const alunos = [
    {nome: 'Jorge', nota: 7.0, bolsita: true},
    {nome: 'Jr', nota: 5.0, bolsita: false},
    {nome: 'Bia', nota: 4.0, bolsita: true},
    {nome: 'Duda', nota: 9.0, bolsita: false}
]

console.log(alunos.map(a => a.nota))

//Map para retornar um novo array somente com notas.
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 0)

console.log(resultado)