function calculoJuros(capitalInicial, taxaJuros, tempoAplicacao){

    taxaJ = taxaJuros / 100;
    let J = capitalInicial * taxaJ * tempoAplicacao;
    console.log(J.toFixed(2));
    
    let montante = capitalInicial + J;

    return `A quantidade de juros é ${J.toFixed(2)} e o montante é ${montante}`


}

//tempo de aplicação é considerada em meses
console.log(calculoJuros(1000, 5, 6));