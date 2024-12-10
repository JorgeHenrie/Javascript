function calculoSalarioLiquido(horasTrabalhadas, valorPorHora){
    let impostos = (1 - 0.30); 
    resultado = (horasTrabalhadas * valorPorHora) * impostos;
    
    console.log(resultado.toFixed(2))
    return 
}

console.log(calculoSalarioLiquido(180, 60))