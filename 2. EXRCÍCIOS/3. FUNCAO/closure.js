//Closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar e manipular variáveis externas a função

//contexto léxico em ação

const x = 'Global';

function fora(){
    const x = 'Local'
    function dentro(){
        return x //permite acesso externos a função, mas por causa do closure, que é o escopo. O escopo da função fora. Por isso a variável x = local
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
