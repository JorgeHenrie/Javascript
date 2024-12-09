class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
    addLancamentos(...Lancamento){
        Lancamento.forEach(l => this.Lancamento.push(l))
    }

    
}
