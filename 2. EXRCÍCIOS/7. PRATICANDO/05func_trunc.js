function trunc(n){
    if (n === Number){
        let numero = n.toFixed(2);
        console.log(numero);
    }
    return `O número ${n} foi truncado`
}

console.log(trunc(0.300000))