//object: coleção de chave e valor

/* 
é usado para armazenar coleções de dados ou entidades mais complexas. Um objeto é uma estrutura que armazena pares de chave-valor, 
onde as chaves são strings (ou símbolos) e os valores podem ser de qualquer tipo, incluindo outros objetos, arrays ou funções.
Representar entidades complexas, como usuários, produtos, veículos, etc.
Trabalhar com dados estruturados que possuem várias propriedades relacionadas.
Criar métodos e encapsular lógica dentro de um objeto.

Json é um formato textual, enquanto obbjeto é uma coleção de chave e valor.

 */

const prod1 =  {};
prod1.nome = 'celular'; //nome criado dinamicamente

console.log(prod1);

const prod2 = {
    nome: 'camisa',
    preco: 79.9,
    obj2: {
        bla: 2,
    }
};

console.log(prod2);