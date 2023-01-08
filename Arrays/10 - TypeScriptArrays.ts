/**
 * O TypeScript fará a verificação de tipos em tempo de compilação para garantir que esejamos manipulando someno arrays com todos os valores do mesmo tipo.
 */

// refatorando o exemplo do array friends para TypeScript
interface Person {
  name: string
  age: number
}

const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }, // virgula no final ES2017
]

function comparePerson(a: Person, b: Person) {
  if (a.age < b.age) {
    return -1
  }
  if (a.age > b.age) {
    return 1
  }
  return 0
}

console.log('friends.sort(comparePerson)', friends.sort(comparePerson))