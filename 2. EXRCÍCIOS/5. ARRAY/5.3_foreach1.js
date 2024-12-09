const aprovados = ['Jorge', 'Bia', 'João']

// para cada novo elemtno percorrido no array chamará a callback passando o próprio elemento e seu respectivo índice
aprovados.forEach(function (nome, indice){
    //Para cada elemento do array a function será chamada. Ou seja, para cada aprovado será impresso na tela o nome e seu índice
    console.log(`${indice + 1}) ${nome} `)
})

aprovados.forEach(nome => console.log(nome)) //Despreza o índice. Temos uama função de callback, que é Callbacks permitem controlar o que deve acontecer depois que uma tarefa é concluída. Uma função passada como parâmetro para outra função

