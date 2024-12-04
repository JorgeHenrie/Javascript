function convenio(idade){
    let mensalidade = 100;
    if (idade < 10){
        mensalidade +=80;
        console.log(`Mensalidade para menores de 09 anos é ${mensalidade.toFixed(2)}`);
    }else if (idade > 9 && idade <= 30){
        mensalidade+=50;
        console.log(`Mensalidade para idades entre 10 anos e 30 anos é ${mensalidade.toFixed(2)}`);
    }else if (idade> 29 && idade <= 60){
        mensalidade += 95;
        console.log(`Mensalidade para idades entre 30 e 60 anos é ${mensalidade.toFixed(2)}`);
    }else{
        mensalidade+=130;
        console.log(`Mensalidade para maiores de 60 é ${mensalidade.toFixed(2)}`);
    }
    return ''
}

console.log(convenio(87))
console.log(convenio(9))