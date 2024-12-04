function verificaAno(ano){

    if ((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)){  //2024 não é divisível por 4(1º parte da sentença - F), mas é divisível por 04, e o resto da divisão é diferente de zero (2ª parte da sentença V). F ou V = V
        console.log(`Ano ${ano} é bissexto`);
        return true;
    }else{
        console.log(`Ano ${ano} não é bissexto`);
        return false;
    }

}
console.log(verificaAno(2024))