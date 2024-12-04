const valor = 'Global'

function minhaFuncao(){ //aqui não tem variável valor, e por isso ela procura no contexto mais global. 
    console.log(valor);
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //Como se trata de onde foi definida e não de onde está sendo executada por isso foi exibido o valor=global
}

exec();

/*  A função carrega consigo o local onde foi definida. Ela vai procurar variável no local onde foi definida, e não o local de execução.
Por isso, minhafuncao procurou no contexto global. 
*/