const produtos = [
    {nome: 'Notebook', preco: 1499, fragil: true},
    {nome: 'Ipad', preco: 839, fragil: true},
    {nome: 'Mesa', preco: 14.99, fragil: false}
]

const caro = produto => produto.preco >= 500; //produto é simplesmente um nome para o elemento atual que está sendo processado.
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))