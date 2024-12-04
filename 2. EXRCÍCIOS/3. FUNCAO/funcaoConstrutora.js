function Carro( velocidadeMaxima = 200, delta = 5){
    //atributo privado - pertence apenas ao escopo dessa função
    let velocidadeAtual = 0;

    //método público
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }       
    }
    //metodo público
    this.getVelocidadeAtual = function (){ //o this é responsável por deixar esse método público para fora da classe
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())