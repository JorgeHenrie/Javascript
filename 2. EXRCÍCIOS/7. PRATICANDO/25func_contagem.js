function exibir(){

    

    for (let i = 1; i <= 50; i++){
        console.log(i);   //Se você usar return dentro de um loop, ele interrompe o loop na primeira iteração, devolvendo um valor (ou nada, resultando em undefined).
    }
  
}

console.log(exibir())