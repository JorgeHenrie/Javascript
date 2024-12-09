const pai = {nome: 'Jorge', corCabelo: 'Preto'}

const filha1 = Object.create(pai) //cria um novo objeto tendo como protótipo o obj pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value : 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)