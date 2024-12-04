function ate100(){
    for (let i = 1; i <= 100; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
    return 'São esses os números pares no intervalo entre 0 e 100'
}

console.log(ate100())