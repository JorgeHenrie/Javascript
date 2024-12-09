const sequencia= {
    _valor: 1, // Não significa que seja privada, a linguagem permitirá o acesso, mas isso é uma convenção que diz aos desenvolvedores que essa variável seja acessada itnernamente.
    get valor(){return this._valor++},
    set valor(valor){this._valor = valor}
}
