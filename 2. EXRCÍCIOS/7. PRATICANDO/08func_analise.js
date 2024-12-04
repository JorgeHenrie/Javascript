function analisarPontuacoes(pontuacoes){
    const pontos = pontuacoes.split(" ").map(Number); //divide a string em substrings usando espaços como separadores. Map converte em array
    let recordes = 0; //Número de vezes que bateu o recorde
    let piorJogo = 1; //Número do pior jogo (começa no primeiro)
    let melhor = pontos[0];
    let pior = pontos[0];

    for (let i = 1; i <= pontos.length; i++){
        if (pontos[i] > melhor){
            melhor = pontos[i];
            recordes ++; //incrementa toda vez que a condição dentro do if for verdadeira.
        }
        if (pontos[i] < pior){
            pior = pontos[i];
            piorJogo = i + 1;
        }
    }
    return [recordes, piorJogo];
}

const pontuacoes = "10 20 30 40 50 60 09 08 01";
console.log(analisarPontuacoes(pontuacoes));