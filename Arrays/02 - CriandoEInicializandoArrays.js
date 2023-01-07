/**
 * Criando e inicializando arrays com a palavra reservada (new)
 * (Não é considerada a melhor prática)
 */
var daysOfWeek = new Array() // declaração e instanciação de um novo array
daysOfWeek = new Array(7) // criação de array especificando o seu tamanho
daysOfWeek = new Array('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo') // passando os elementos diretamente na criação

/**
 * Criando e inicializando arrays com colchetes ([])
 * (Melhor prática)
 */
var daysOfWeek = []
daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'] // também podemos inicializar o array com alguns elementos

// se quisermos saber quantos elementos há no array (o seu tamanho), podemos usar a propriedade length
console.log(daysOfWeek.length) // 7

/**
 * Para acessar um posição em particular do array, podemos também usar colchetes, passando o índice da posição que gostaríamos de acessar.
 */
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]) // exibe todos os elementos do array
}