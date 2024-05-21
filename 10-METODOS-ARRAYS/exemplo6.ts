//join -> junta todos os elementos de um array e retorna uma string com os elementos

function stringInvertida(palavra: string) {
    const arrayPalavra = palavra.split('') //transforma uma string em um array
    const resultado = arrayPalavra.reverse().join('') // necessário colocar join('') por que se não ele separa por vírgula cada elemento
    //join transforma um array em uma string
    console.log(resultado)
}

stringInvertida('Cubos Academy')