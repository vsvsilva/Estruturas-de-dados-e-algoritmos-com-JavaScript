/**
 * O JavaScript tem um método de ordenação e deois métodos de pesquisa disponíveis.
 */

// Método sort
let numbers = [15, 14, 13, 12, 11, 10, 9,  8,  7,  6,  5,  4, 3,  2,  1]
numbers.sort()
console.log(numbers) //[1, 10, 11, 12, 13, 14, 15, 2,  3,  4,  5,  6, 7,  8,  9]
/**
 * Veja que não está ordenado corretamente.
 * Isso porque o método sort deixa os elementos em ordem lexicográifca e pressupõe que todos os elementos são string.
 * 
 * Podemos implementar a nossa própria função de comparação, com base nos elementos numéricos.
 * Esse código devolverá um número negativo se b for maior que a, um número positivo se a for maior que b e 0 se forem iguais.
 * Isso significa que, se um valor negativo for devolvido, é sinal de que a é meor que b, o que será usado posteriormente pela função sort para organizar os elementos.
 * 
 * Isso ocorre porque a função sort da classe Array pode receber um parâmetro chamado compareFunction, responsãvel pela ordenação do array.
 */
numbers.sort((a, b) => a- b)
console.log(numbers) // [1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15]

/** ----------------------------------------------------------------------------------------------- */

/**
 * Ordenação personalizada
 * 
 * Podemos ordenar um array que contenha qualquer tipo de objeto, e podemos também criar uma compareFunction para comparar os elementos de acordo com o que for necessário.
 * 
 * Vamos fazer a comparação de um objeto Person com base na idade
 */

const friends = [
  {name: 'Jhon', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25}
]

function comparePerson(a, b){
  if(a.age < b.age){
    return -1
  }
  if(a.age > b.age){
    return 1
  }
  return 0
}

friends.sort((a, b) => a.age - b.age) // ou friends.sort(comparePerson)
console.log(friends) /* 
  [
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },
    { name: 'Jhon', age: 30 }
  ]
*/

/** ----------------------------------------------------------------------------------------------- */

/**
 * Ordenando Strings
 * 
 * O JavaScript compara os caracteres de acordo com o seu valor ASCII. Portanto J tem um valor menor que a, e, por esse motivo, vem antes no alfabeto.
 */

let names = ['Ana', 'ana', 'Jhon', 'jhon']
console.log(names.sort()) // [ 'Ana', 'Jhon', 'ana', 'jhon' ]

/* 
  Se quisermos ignorar a diferença entre maiúsculas e minúsculas, teriamos que usar o método localeCompare
*/
console.log(names.sort((a, b) => a.localeCompare(b))) // [ 'ana', 'Ana', 'jhon', 'Jhon' ]

// Também podemos usar o método localeCompare para caracteres com acento
const names2 = ['Maève', 'Maeve']
console.log(names2.sort((a, b) => a.localeCompare(b))) // [ 'Maeve', 'Maève' ]
