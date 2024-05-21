//splice -> alterar um array removendo e/ou adicionando outros elementos

const arrayPaises = ['Alemanhã', 'Luxemburgo', 'Portugal', 'Belgica', 'Itália']

//console.log(arrayPaises.splice(0, 2))
// console.log(arrayPaises.splice(0, 2, 'Japão'))
// console.log(arrayPaises.splice(1, 3, 'Japão', 'China'))
console.log(arrayPaises.splice(2, 0, 'Japão', 'China'))
console.log(arrayPaises)

//metodo splice (n1 - numero 1 seleciona o índice, n2 - se deseja excluir e quantos deseja excluir)