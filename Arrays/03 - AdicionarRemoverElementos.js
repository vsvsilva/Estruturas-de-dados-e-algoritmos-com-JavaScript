/**
 * em JavaScript um array é um objeto mutável. podemos facilmente lhe acrescentar novos elementos. O objeto crescerá dinamicamente à medida que novos elementos forem adicionados.
*/

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/* INSERINDO UM ELEMENTO NO FINAL DO ARRAY */
numbers[numbers.length] = 10 // referenciando a última posição livre do array

numbers.push(11) // usando o método push
numbers.push(12, 13)
console.log(numbers) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13]

/* INSERINDO UM ELEMENTO NA PRIMEIRA POSIÇÃO */
/**
 * vamos deixar a primeira posição livre, deslocando todos os elementos para a direita, para conseguir inserir o valor na primeira posição. Podemos percorrer todos os elementos do array com um laço, começando pela última posição.
 * podemos criar uma função para representar essa lógica e adicionar um novo método diretamente no Array prototype, deixando o método disponível a todas as instâncias de array.
*/
Array.prototype.insertFirstPosition = function(valor){
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  this[0] = valor
}
numbers.insertFirstPosition(-1)
console.log(numbers) // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13]

/* usando o método unshift */
/**
 * A classe array de JavaScript também tem um método chamado unshift, que insere no início do array os valores passados como argumento para o método.
 * (A lógica interna tem o mesmo comportamento do método insertFirstPosition() que criamos)
*/
numbers.unshift(-2)
numbers.unshift(-4, -3)
console.log(numbers) // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13]

/* ----------------------------------------------------------------------------------------------- */

/* REMOVENDO UM ELEMENTO DO FINAL DO ARRAY */
numbers.pop()
console.log(numbers) // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/* REMOVENDO UM ELEMENTO DA PRIMEIRA POSIÇÃO */
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1]
}
console.log(numbers) // [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined]
/**
 * deslocamos todos os elementos de uma posição para a esquerda. entretanto, o tamanho (length) do array continua igual (17), o que significa que ainda temos um elemento extra em nosso array (com um valor undefined).
 * na última execução do laço, i+1 era uma referência a uma posição inexistente. em outras linguagens o código lançaria uma exceção e seria necessário encerrar o nosso laço em numbers.length - 1
*/
/**
 * simplesmente sobrescrevemos os valores originais do array, sem de fato tê-los removido (pois o tamanho do array continua o mesmo e temos esse elemento extra undefined)
 * seria necessário criar outro array e copiar todos os valores diferentes de undefined do array original para o novo array.
*/

numbers.pop() // remove o valor undefined
console.log(numbers) // [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/* usando o método shift */
numbers.shift() // remove um elemento do início do array
console.log(numbers) // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/** ----------------------------------------------------------------------------------------------- */

/* REMOVENDO ELEMENTOS DE UMA POSIÇÃO ESPECÍFICA */
/**
 * o méotodo splice pode ser usado para remover um elemento de um array, simplesmente especificando a posiçao/índice a partir do qual queremos fazer a remoção e a quantidade de elementos que gostaríamos de remover
*/
numbers.splice(5, 3) // remove 3 elementos a partir do índice 5 do nosso array
console.log(numbers) // [-2, -1, 0, 1, 2, 6, 7, 8, 9, 10, 11, 12]

/**
 * o operador delete também pode ser usado para remover um elemento de um array.
 * exemplo: delete numbers[0]
 * No entanto, a posição 0 do array terá o valor undefined, ou seja, será o mesmo que executar numbers[0] = undefined.
 */

/* ADICIONANDO ELEMENTO EM UMA POSIÇÃO ESPECÍFICA */
numbers.splice(5, 0, 3, 4, 5)
/**
 * O primeiro argumento do método splice é o índice a partir do qual queremos remover ou inserir elementos. (5)
 * O segundo argumento é a quantidade de elementos que queremos remover. nesse caso, nenhum. (0)
 * Do terceiro argumento em diante, temos os valores que gostaríamos de inserir no array. (2, 3 e 4)
*/
console.log(numbers) // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

numbers.splice(5, 3, 3, 4, 5)
/**
 * Os valores de -2 a 12 continuam a serem exibidos na saída.
 * Porque removemos 3 elementos a partir do índice 5, mas também acrescentamos os elementos 3, 4, e 5 a partir do índice 5.
*/
console.log(numbers) // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]