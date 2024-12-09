const carrinho = [
    '{"nome": "borracha", "preco": 13.4 }',
    '{"nome": "caderno", "preco": 23.4 }',
    '{"nome": "lapis", "preco": 22.4 }',
]

//retornar um array apenas com preço
// let resultado = carrinho.map(e => e.preco);
// console.log(resultado)

const paraObjeto = json => JSON.parse(json) //transforma para objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
