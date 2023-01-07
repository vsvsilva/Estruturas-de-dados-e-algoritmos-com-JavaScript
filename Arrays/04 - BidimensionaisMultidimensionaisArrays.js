/* ARRAYS BIDIMENSIONAIS */
/**
 * Suponha que precisamos media a temperatura de hora em hora durante alguns dias.
 * Agora que já sabemos que é possível usar um array para armazenas as temperaturas, podemos facilmente escrever o código a seguir a fim de armazenar as temepraturas no decorrer de dois dias
 */

let mediaTempDia1 = [25, 23, 28, 21, 24, 32]
let mediaTempDia2 = [32, 24, 33, 28, 28, 30]

/**
 * Porém, uma matriz (um array bidimensional ou array de arrays) pode ser usado para armazenar essas informações, na qual cada linha representa o dia e cada coluna representa a medidade da temperatura de hora em hora
 */

let mediaTemperatura = []
mediaTemperatura[0] = [25, 23, 28, 21, 24, 32]
mediaTemperatura[1] = [32, 24, 33, 28, 28, 30]

/**
 * também podemos especificar o valor de cada dia e cada hora separadamente:
 * mediaTemperatura[0][0] = 25
 * mediaTemperatura[0][1] = 23
 * etc..
 */


/* ITERANDO PELOS ELEMENTOS DE ARRAYS BIDIMENSIONAIS */
for(let i = 0; i < mediaTemperatura.length; i++){
  for(let j = 0; j < mediaTemperatura[i].length; j++){
    console.log(mediaTemperatura[i][j]) // exibe todos os valores do array bidimensional
  }
}

console.table(mediaTemperatura) // maneira mais elegante de imprimir um array bidimensional

/** ----------------------------------------------------------------------------------------------- */

/* ARRAYS MULTIDIMENSIONAIS */
const matrix3x3x3 = []
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [] // precisamos inicializar cada array
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = []
    for (let k = 0; k < 3; k++) {
      matrix3x3x3[i][j][k] = i + j + k
    }
  }
}
console.table(matrix3x3x3)
/**
 * precisamos percorrer cada dimensão com um laço a fim de acessar a célula, não importa quantas dimensões temos no array.
 */
  