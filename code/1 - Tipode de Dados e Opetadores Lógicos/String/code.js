// ############## String ##########################

let longString = "This is a very long string which needs" +
                 "to wrap across multiple lines because \
                  otherwise my code is unreadable."
// usando o \ ele conta o espaço dado

longString[0] = 'Q' // imutavel

let longString2 = "This is a very long string which needs \
to wrap across multiple lines because" +
                " otherwise my code is unreadable."

console.log(longString.length, longString2.length)

longString = 'uma string bem menor'
console.log('apenas' + longString + 'teste')



const test = () => {}
let aux1 = 'string test'
let aux2 = new String(test)
let aux3 = String(test)
let aux4 = aux2.toString()
console.log(typeof aux1, typeof aux2, typeof aux3, typeof aux4)
console.log(aux2 == aux3, aux2 === aux3 ) // o conteúdo retornado é o mesmo, mas o tipo de dado é diferente

// Imutável
let test8 = 'aaaa string'

let str = test8.concat('aaaaa')
test8.concat('aaaaa')
console.log('\n\n String imutavel, linha 29')
console.log(test8, str)

// toString() x String()

aux = undefined
let strrr = new String(typeof(x)) // Dá erro, mas pq? não tem referencia na memoria?
// console.log(x.toString())
console.log(String(null), String(undefined), strrr, typeof strrr)

console.log(strrr.String, strrr[5])

const str2 = { String: null }
console.log('\n\n toString() x String(), linha 39')
console.log(str2.String, str2[5])

strrr = `template`
console.log('\n\n template literals, linha 50')
console.log(typeof strrr)

console.log('\n\n imprimindo uma função vazia, linha 55')
console.log(test.toString(), test, test.Function)

console.log('\n\n usando o lastIndexOf, linha 58')
str = 'string e es test string'
let concat = str.lastIndexOf('test')
aux1 = str.lastIndexOf('test', 0) // sem dizer de onde deve-se começar a procurar, ele começa do final da string para o começo
                                  // colocando 0, a função só vai percorrer 's', logo não acha a substring e retonra -1
aux2 = str.lastIndexOf('string')
aux3 = str.lastIndexOf('string', 0) 


console.log(concat, aux1, aux2, aux3, str[concat], str[aux1], typeof concat, str.length)


