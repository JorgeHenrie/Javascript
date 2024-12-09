//object.preventExtensions
//Não permite que seu objeto seja extendido, ou seja, não permite adicionar novos atributos no objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Banana'
produto.descricao = 'Borracha de veludo'
delete produto.tag
console.log(produto)

//Object.seal: não adiciona novos atributos nem excluir.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Henri'
delete pessoa.nome
console.log(pessoa)
