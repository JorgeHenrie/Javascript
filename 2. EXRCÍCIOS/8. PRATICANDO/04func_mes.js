function mes(numero){
    switch (numero){
        case 1 :
            console.log('Segunda-feira');
            break;
        case 2:
            console.log('Terça-feira');
            break;
        default:
            console.log('Opção inválida!');
            break;
    }
    return ''
}
console.log(mes(1))
console.log(mes(4))