function verificacao(num){
    if (num % 3 == 0){
        return 'Número divisível por 03'
    }else{
        return 'Número não divisivel por 03';
    }
}

console.log(verificacao(8));