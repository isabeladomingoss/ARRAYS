//Faça uma função que recebe parâmetros do tipo string e imprima na tela
//Essa string invertida, ou seja, de trás para frente.
//Dica: Lembre-se que o método reverso só pode ser chamado por arrays.

function stringInvertida(palavra: string) {
    const arrayPalavra = palavra.split('')
    let resultado: string = ''

    for(const letra of arrayPalavra.reverse()){
        resultado += letra
    }
    
    console.log(resultado)
}

stringInvertida('Cubos Academy')