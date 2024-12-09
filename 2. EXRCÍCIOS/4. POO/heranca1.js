const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'Volvo',
    velMax: 200,
}

console.log(ferrari.__proto__) //vai procurar minha super classe no qual vai procurar protótipo por protótipo
console.log(ferrari.__proto__ === Object.prototype)