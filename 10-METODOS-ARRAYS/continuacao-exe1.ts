//pop -> remove o último elemento e retorna o elemento que foi removido.

const arrayNumeros = [12, 1, 45, 76, 100]

// console.log(arrayNumeros[arrayNumeros.length - 1])

// const novoArray = []

// for (let i = 0; i < arrayNumeros.length - 1; i++){
//     novoArray[i] = arrayNumeros[i]
// }

const elementoRemovido = arrayNumeros.pop()

console.log(arrayNumeros)
console.log(elementoRemovido)