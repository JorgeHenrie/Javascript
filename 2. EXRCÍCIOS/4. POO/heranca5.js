console.log(typeof String) //é uma função. Todas as funções tem o atributo .prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())


