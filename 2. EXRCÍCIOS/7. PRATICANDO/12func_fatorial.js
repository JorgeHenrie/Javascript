function fatorial(n){
    soma = 1;

    for (let i = 2; i <= n; i++){
        console.log(soma *= i);
    }
    return `O fatorial de ${n} é ${soma}`
}

console.log(fatorial(7))