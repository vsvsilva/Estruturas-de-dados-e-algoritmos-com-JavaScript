/**
 * Temos duas opções para pesquisa:
 *  indexOf que devolve o índice do primeiro elemento correspondente ao argumento passado.
 *  lastIndexOf que devolve o índice do último elemento encontrado correspondente ao argumento passado.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(numbers.indexOf(10)) // 9: se encontra na posição 9
console.log(numbers.indexOf(100)) // -1: não existe no array

numbers.push(10)
console.log(numbers.lastIndexOf(10)) // 15: se encontra na última posição
console.log(numbers.lastIndexOf(100)) // -1: não existe no array

/** ----------------------------------------------------------------------------------------------- */

/**
 * ES6 - Métodos find e findIndex
 * Os métodos find e findIndex recebem uma função callback, a qual buscará um valor que satisfaça a condição presente na função de teste (callback).
 * 
 * A diferença entre find e findIndex é que o método find devolve o primeiro valor do array que satisfaça a condição proposta. Caso o valor não seja encontrado, undefined será devolvido.
 * 
 * O método findIndex. devolve o índice do primeiro valor do array que satisfaça a condição.
 * Caso o valor não seja encontrado, -1 será devolvido.
 */

function multipleOf13(element, index, array){
  return (element % 13 === 0)
}
console.log(numbers.find(multipleOf13)) // 13, por ser múltiplo de 13
console.log(numbers.findIndex(multipleOf13)) // 12, por ser a posição no array

/** ----------------------------------------------------------------------------------------------- */

/**
 * ES6 - método includes
 * devolve true caso um elemento seja encontrado no array, e false caso contrário.
 */
console.log(numbers.includes(15)) // true
console.log(numbers.includes(20)) // false

// também é possível passar um índice de início a partir do qual queremos que o array faça a pesquisa do valor
console.log(numbers.includes(5, 9)) // false, pois após a posição 9 não existe o elemento 5

/** ----------------------------------------------------------------------------------------------- */

/* Convertendo um array em uma string */
// se quisermos exibir todos os elementos do array em uma string, usamos o método toString
console.log(numbers.toString()) // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,10

// se quisermos separa ros elementos com um separador diferente, por exemplo, -, o método join poderá ser usado
const numbersString = numbers.join('-')
console.log(numbersString) // 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-10

