//função construtora
function Produto(nome, preco, valor){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

//notação literal
const obj1 = {}
console.log(obj1)

//Função factory/fábrica
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase, 
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

//objeto create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)