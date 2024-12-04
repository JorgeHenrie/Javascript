function teste1(num){
    if(num > 7)
        console.log(num) //apenas essa sentença de código está associada ao if 

    console.log('final')
    
}

// teste1(6)
// teste1(8)

function teste2(num){
    if(num > 7);{ //cuidado com ';', não utilizar na estrutura de controle. O ; finalizou o código if, e as {} iniciaram um bloco que sempre será executado, pois não há filtro algum para ela.
        
        console.log(num)
    }
}

teste2(6)
teste2(8)