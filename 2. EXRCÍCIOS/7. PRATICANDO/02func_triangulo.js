function triangulo(lado1, lado2, lado3){

    if(lado1 == lado2 && lado2 == lado3){ //apenas se as duas condições forem verdadeiras que retornará true no and
        console.log('Equilátero');
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){ //uma ou ambas retorna true no OU
        console.log('Isósceles');
    }else{
        console.log('Escaleno');
    }

}

triangulo(1,2,2)
triangulo(1,2,3)
triangulo(3,3,3)

