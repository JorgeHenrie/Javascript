function tratarErroELancar(erro){
    //throw new Error('...');
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{ //aqui pode ter um erro
        console.log(obj.name.toUpperCase() + '!!!');
    }catch (e){ //aqui trato o erro
        tratarErroELancar(e);
    } finally { //se ocorrer erro ou não esse bloco será executado
        console.log('final');
    }
    
}

const obj = {name : 'Jorge'};
imprimirNomeGritado(obj);