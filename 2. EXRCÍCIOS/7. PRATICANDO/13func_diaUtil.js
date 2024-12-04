function verificaDia(dia){
    switch (dia){
        case 1 : 
            console.log('Domingo - final de semana');
            break;
        case 2 : 
            console.log('Segunda');
            break;
        case 3 : 
            console.log('Terça');
            break;
        case 4 : 
            console.log('Quarta');
            break;
        case 5 : 
            console.log('Quinta');
            break;
        case 6 : 
            console.log('Sexta');
            break;
        case 7 : 
            console.log('Sábado - final de semana');
            break;
        default:
            console.log('Dia inválido');
            break;
    }
    return ''
}
console.log(verificaDia(2))