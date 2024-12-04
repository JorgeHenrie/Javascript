/*   
1. Abstração: 
A abstração é o processo de ocultar detalhes desnecessários e mostrar apenas as funcionalidades essenciais de um objeto. Em JavaScript, 
usamos classes ou funções construtoras para criar modelos que representem objetos reais.

2. Encapsulamento
O encapsulamento restringe o acesso direto a certos detalhes de um objeto, permitindo que apenas métodos específicos os manipulem. 
Isso ajuda a proteger os dados e a garantir que eles sejam usados de forma controlada.

class ContaBancaria {
    #saldo; // Campo privado

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    depositar(valor) {
        this.#saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
    getSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
conta.sacar(300);
console.log(conta.getSaldo()); // 1200
console.log(conta.#saldo); // Erro: Propriedade privada

Propriedades privadas: Começam com # e só podem ser acessadas dentro da classe.
Métodos públicos: Como depositar, sacar, e getSaldo, fornecem um controle seguro para interagir com os dados.


A Programação Orientada a Objetos (POO) em JavaScript segue os mesmos princípios fundamentais que outras linguagens orientadas a objetos, como Java ou Python. Esses princípios são conhecidos como os quatro pilares da POO:

1. Abstração
A abstração é o processo de ocultar detalhes desnecessários e mostrar apenas as funcionalidades essenciais de um objeto. Em JavaScript, usamos classes ou funções construtoras para criar modelos que representem objetos reais.

Exemplo:
javascript
Copiar código
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`O ${this.marca} ${this.modelo} está ligado.`);
    }
}

// Usando a abstração
const meuCarro = new Carro("Toyota", "Corolla", 2021);
meuCarro.ligar(); // "O Toyota Corolla está ligado."
Detalhes internos: Como o carro foi construído, não estão expostos.
Interface pública: Apenas métodos como ligar são acessíveis ao usuário.
2. Encapsulamento
O encapsulamento restringe o acesso direto a certos detalhes de um objeto, permitindo que apenas métodos específicos os manipulem. Isso ajuda a proteger os dados e a garantir que eles sejam usados de forma controlada.

Exemplo com Campos Privados:
javascript
Copiar código
class ContaBancaria {
    #saldo; // Campo privado

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
conta.sacar(300);
console.log(conta.getSaldo()); // 1200
console.log(conta.#saldo); // Erro: Propriedade privada
Propriedades privadas: Começam com # e só podem ser acessadas dentro da classe.
Métodos públicos: Como depositar, sacar, e getSaldo, fornecem um controle seguro para interagir com os dados.


3. Herança
A herança permite que uma classe (subclasse) herde propriedades e métodos de outra classe (superclasse). Isso promove o reuso de código e permite 
especializações.


A Programação Orientada a Objetos (POO) em JavaScript segue os mesmos princípios fundamentais que outras linguagens orientadas a objetos, como Java ou Python. Esses princípios são conhecidos como os quatro pilares da POO:

1. Abstração
A abstração é o processo de ocultar detalhes desnecessários e mostrar apenas as funcionalidades essenciais de um objeto. Em JavaScript, usamos classes ou funções construtoras para criar modelos que representem objetos reais.

Exemplo:
javascript
Copiar código
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`O ${this.marca} ${this.modelo} está ligado.`);
    }
}

// Usando a abstração
const meuCarro = new Carro("Toyota", "Corolla", 2021);
meuCarro.ligar(); // "O Toyota Corolla está ligado."
Detalhes internos: Como o carro foi construído, não estão expostos.
Interface pública: Apenas métodos como ligar são acessíveis ao usuário.
2. Encapsulamento
O encapsulamento restringe o acesso direto a certos detalhes de um objeto, permitindo que apenas métodos específicos os manipulem. Isso ajuda a proteger os dados e a garantir que eles sejam usados de forma controlada.

Exemplo com Campos Privados:
javascript
Copiar código
class ContaBancaria {
    #saldo; // Campo privado

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
conta.sacar(300);
console.log(conta.getSaldo()); // 1200
console.log(conta.#saldo); // Erro: Propriedade privada
Propriedades privadas: Começam com # e só podem ser acessadas dentro da classe.
Métodos públicos: Como depositar, sacar, e getSaldo, fornecem um controle seguro para interagir com os dados.
3. Herança
A herança permite que uma classe (subclasse) herde propriedades e métodos de outra classe (superclasse). Isso promove o reuso de código e permite especializações.

Exemplo:
javascript
Copiar código
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Som genérico.");
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da superclasse
        this.raca = raca;
    }

    fazerSom() {
        console.log("O cachorro late.");
    }
}

const rex = new Cachorro("Rex", "Labrador");
rex.fazerSom(); // "O cachorro late."
console.log(rex.nome); // "Rex"
extends: A subclasse (Cachorro) herda da superclasse (Animal).
super: Utilizado para chamar o construtor ou métodos da superclasse.


4. Polimorfismo
O polimorfismo permite que métodos com o mesmo nome tenham comportamentos diferentes, dependendo da classe em que estão definidos.

class Forma {
    calcularArea() {
        return "Área não definida.";
    }
}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

const formas = [new Retangulo(5, 10), new Circulo(7)];
formas.forEach(forma => console.log(forma.calcularArea()));
// Saída:
// 50
// 153.93804002589985

*/