const alunos = [
    {nome: 'Jorge', nota: 7.0, bolsita: true},
    {nome: 'Jr', nota: 5.0, bolsita: false},
    {nome: 'Bia', nota: 4.0, bolsita: true},
    {nome: 'Duda', nota: 9.0, bolsita: false}
]

//Desafio: todos os alunos são bolsitas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsita).reduce(todosBolsistas))

// const resultado = alunos.map(a => a.bolsita).reduce(function(acumulador, valorAtual){
//     if(alunos.bolsita != true){
//         console.log(`${alunos} é `)
//     }
// }, 0 )

//Desafio: algum aluno é bolsista?
const peloMenosUm = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsita).reduce(peloMenosUm))