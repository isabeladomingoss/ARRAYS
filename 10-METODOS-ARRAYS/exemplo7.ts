//slice -> retorna uma cópia contendo a parte de um array de acordo com os indices informados

const arrayPaises = ['Alemanhã', 'Luxemburgo', 'Portugal', 'Belgica', 'Itália']
console.log(arrayPaises.slice(2)) //do começo para o final
console.log(arrayPaises.slice(-2)) //do final para o começo
console.log(arrayPaises.slice(1, 4)) //do índice 1 ao 4
console.log(arrayPaises.slice(2, -1)) //dos últimos menos o último