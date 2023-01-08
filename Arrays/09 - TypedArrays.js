/**
 * Como o Javascript não é fortemente tipado, podemos armazenar qualquer dado em arrays.
 * 
 * TypedArray foi criado para que pudéssemos trabalhar com arrays contendo um único tipo de dado.
 * let myArray = new TypedArray(length)
 * onde TypedArray deve ser substituído por uma classe TypedArray
 * conferir classes em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects
 */

let length = 5
let int16 = new Int16Array(length)
for (let i = 0; i < length; i++) {
  int16[i]   = i+1
}
console.log(int16) // Int16Array(5) [ 1, 2, 3, 4, 5 ]
// tutorial sobre uso de arrays tipados para manipular dados binários e suas aplicações em projetos do mundo real: https://web.dev/webgl-typed-arrays/