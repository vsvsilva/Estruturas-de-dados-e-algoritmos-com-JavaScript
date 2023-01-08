/**
 * Iterando com o laço for...of
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for(const n of numbers){
  console.log(n % 2 ===0 ?'even' : 'odd')
}

/**
 * Usando o objeto @@iterator.
 * É uma propriedade da classe Array introduzida na ES2015.
 * Para usá-la, é necessário acessar a propriedade Symbol.iterator do array.
 * Podemos chamar individualmente o método next do iterador para obter o próximo valor do array.
 * Quando não houver mais valores para iterar, o código iterator.next() devolverá undefined.
 */
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2

/** ----------------------------------------------------------------------------------------------- */

/**
 * Métodos entries, keys e values de array
 * A ES6 também introduziu 3 formas de obter iteradores de um array.
 * 
 * A primeira é o método entries.
 * O método entries devolve @@iterator, que contém pares de chave/valor.
 */
let aEntries = numbers.entries() // obtém um iterador de chave/valor
console.log(aEntries.next().value) // [0, 1] posição 0, valor 1
console.log(aEntries.next().value) // [1, 2] posição 1, valor 2
/**
 * Como o array numbers contém apenas números, key será a posição do array e value será o valor armazenado no índice do array.
 */

/**
 * O método keys devolve @@iterator, que contém as chaves do array.
 */
const aKeys = numbers.keys()
console.log(aKeys.next()) // {value: 0, done: false}
console.log(aKeys.next()) // {value: 1, done: false}
/**
 * Para o array numbers, keys conterá os índices do array.
 * Quand não houver mais valores para iterar, o código aKeys.next() devolverá undefined como value e done como true.
 * Se done tiver um valor igual a false, isso significa que ainda há mais chaves para iterar no array.
 */

/**
 * O método vales devolve @@iterator, que contém os valores do array
 */
const aValues = numbers.values()
console.log(aValues.next()) // {values: 1, done: false}
console.log(aValues.next()) // {values: 2, done: false}

/** ----------------------------------------------------------------------------------------------- */

/**
 * Usando o método from
 * O método Array.from cria outro array a partir de um array existente.
 */
let numbers2 = Array.from(numbers) // copia o array numbers para um novo array

 // Também é possível passar uma função para que possamos determinar quais valores queremos mapear.
let evens = Array.from(numbers, x => (x % 2 == 0))
console.log(evens) // [false, true,  false, true,  false, true, false, true,  false, true,  false, true, false, true,  false]

/** ----------------------------------------------------------------------------------------------- */

/**
 * Usando o método Array.of
 * Cria outro array a partir dos argumentos passados para o método.
 */
let numbers3 = Array.of(1, 2, 3, 4, 5, 6)
// seria o mesmo que fazer numbers3 = [1, 2, 3, 4, 5, 6]

// Também podemos usar esse método para fazer uma cópia de um array existente
let numberCopy = Array.of(...numbers)
console.log(numberCopy) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/** ----------------------------------------------------------------------------------------------- */

/**
 * Usando o método fill
 * Preenche o array com um valor
 */
numberCopy.fill(0)
console.log(numberCopy) //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//Também podemos passar o índice de início a partir do qual queremos preencher o array.
numberCopy.fill(1, 5)
console.log(numberCopy) // [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

// Também é possível passar o índice final até o qual queremos preencher o array.
numberCopy.fill(2, 6, 10)
console.log(numberCopy) // [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1]

// O método fill é ótimo se quisermos criar um array e inicializar seus valores.
let ones = Array(6).fill(1)
console.log(ones) // [ 1, 1, 1, 1, 1, 1 ]

/** ----------------------------------------------------------------------------------------------- */

/**
 * Usando o método copyWithin
 * Copia uma sequência de valores do array para a posição de um índice de início.
 * Muda o próprio array.
 */

let copyArray = [1, 2, 3, 4, 5, 6]
// Vamos copiar os valores 4, 5 e 6 para as 3 primeiras posições do array
copyArray.copyWithin(0, 3)
console.log(copyArray) // [ 4, 5, 6, 4, 5, 6 ]

// podemos também copiar os valores 4 e 5 (posições 3 e 4) para as posições 1 e 3
copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(1, 3, 5)
console.log(copyArray) // [ 1, 4, 5, 4, 5, 6 ]