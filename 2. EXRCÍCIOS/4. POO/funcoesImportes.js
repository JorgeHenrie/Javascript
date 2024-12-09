//Objeto é uma coleção chave valor

const Pessoa = {
    nome: 'Jorge',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(Pessoa))
console.log(Object.values(Pessoa))
console.log(Object.entries(Pessoa))

Object.defineProperty(Pessoa, 'dataNascimento',{
    enumerable: true, // será listada
    writable: false, //não permite alteração
    value: '01/01/2020',
})

Pessoa.dataNascimento = '01/02/2020'
console.log(Pessoa.dataNascimento)

