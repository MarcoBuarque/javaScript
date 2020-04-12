// Arquivo sobre métodos de array e string 

const stringEx = 'Lorem ipsum dolor sit amet'


// startWith retorna true ou falso (nome da função é auto-descritivo)
let aux1 = stringEx.startsWith('Lorem')
let aux2 = stringEx.endsWith('ame', stringEx.length - 1) // se eu tirar o -1 o resultado será falso

let aux3 = stringEx.substring(1,5)
console.log(aux1, aux2, aux3) // Output = true true orem


aux1 = 'ok'.repeat(5) //repete 5 vezes a string
aux2 = stringEx.includes('ipsu')
aux3 = stringEx.includes('m',stringEx.length - 1) // segundo parametro é o index do qual começaremos a busca
console.log(aux1, aux2, aux3) // Output = okokokokok, true, false


// Array.from() transforma um objeto semelhante a um array em um array para que ele possa receber
// os protoTypes do tipo array 

// transformar todos os char em item do array 
aux1 = Array.from(stringEx) 

console.log(aux1) //
