/**
 * Os arrays em JavaScript são objetos modificados, o que significa que todo array que criarmos terá alguns métodos disponíveis para uso.
 */

/* JUNTANDO VÁRIOS ARRAYS COM CONCAT */
/**
 * podemos passar quantos arrays e objetos/elementos quisermos para esse array.
 * Os arrays serão concatenados no array especificado na ordem em que os argumentos forem passados para o método
 */
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]
let numbers = negativeNumbers.concat(zero, positiveNumbers)
console.log(numbers) // [-3, -2, -1, 0, 1, 2, 3]

/** ----------------------------------------------------------------------------------------------- */

/* FUNÇÕES DE ITERAÇÃO */
/**
 * O JavaScript tem alguns métodos de iteração embutidos, que podem ser usados com arrays.
 * Nos exemplos a seguir, vamos usar um array e uma função.
 * Usaremos uma função que devolverá true se o número for múltiplo de 2 (par) e false caso contrário.
 */
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const isEven = x => x % 2 === 0 // função com sintaxe ES6

/**
 * ITERANDO COM O MÉTODO EVERY
 * O método every itera pelos elementos do array até que a função devolva false
 */
let everyResult = numbers.every(isEven)
console.log(everyResult) // false
/**
 * Nesse caso, o nosso primeiro elemeno do array é o número 1, que não é múltiplo de 2.
 * Portanto a função isEven devolverá false, e essa será a única vez que a função será executada.
 */

/**
 * ITERANDO COM O MÉTODO SOME
 * O método some faz o oposto do every, ou seja, itera pelos elementos do array até que a função devolva true
 */
let someResult = numbers.some(isEven)
console.log(someResult) // true
/**
 * Nesse caso, o primeiro número par em nosso array é o 2 (o segundo elemento)
 * Na primmeira iteração (número 1) devolverá false. Então, na segunda iteração será o número 2, que devolverá true, e a iteração será interrompida.
 */

/** ITERANDO COM FOREACH
 * Se precisarmos fazer a iteração em todo o array, podemos usar a função forEach.
 * O resultado será o mesmo que usar um laço for com o código da função dentro dele
 */
numbers.forEach(x => console.log(isEven(x))) // [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
// veja que assim como um for, o método forEach não devolve nada, serve apenas como iterador.

/**
 * USANDO MAP E FILTER
 * Em JavaScript também temos outros dois métodos iteradores que devolvem um novo array como resultado.
 * O primeiro é o método map.
 * Ele armazena os resultados da função iEven, passada para o método map.
 */
const myMap = numbers.map(isEven)
console.log(myMap) // [false, true,  false, true,  false, true, false, true,  false, true,  false, true, false, true,  false]

/**
 * método filter
 * Ele devolve um novo array com os elementos para os quais a função devolveu true
 * No nosso caso, devolverá os elementos que são múltiplos de 2
 */
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers) // [2,  4,  6, 8, 10, 12, 14]

/**
 * MÉTODO REDUCE
 * recebe uma função com os seguintes parâmetros: previousValue, currentValue, index e array (index e array são opcionais)
 * Podemos usar essa função para devolver um valor que será somado a um acumulador, o qual será devolvido depois que o método reduce parar de executar.
 * Isso pode ser útil quando queremos somar todos os valroes de um array.
 */
let sum = numbers.reduce((previous, current) => previous + current)
console.log(sum) // 120
