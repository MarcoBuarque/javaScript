// ############## String ##########################

// Exemplo Acessando Caracter 
console.log('Exemplo acessando caracter')

let stringTest = 'uma string de teste'

console.log(stringTest[1], stringTest.charAt(1))



// Exemplo De De Imutabilidade
console.log('\n Exemplo de De Imutabilidade')

let test8 = 'aaaa string'
stringTest = test8.concat('aaaaa')
test8.concat('aaaaa') // tentando acrescentar a string 'aaaaa' em test8

console.log('\n\n String imutavel, linha 29')
console.log(test8, stringTest)


// Exemplo De Propriedade
console.log('\n Exemplo de propriedade')

let str = 'primeira string'
let otherStr = 'outra string'

console.log('str.length', str.length)



// Exemplo Principais Métodos 
console.log('\n Exemplo Principais metodos')

console.log('str.concat(otherStr,...)', str.concat(' ', otherStr, ' mais test'))
console.log('concatenação com +', str + ' ' + otherStr + ' mais test')
console.log('str.')
console.log('str.')
console.log('str.')
console.log('str.')
// TODO: acrescentar mais exemplos


// Exemplo Caracteres Especiais
console.log('\n Exemplo De Caracteres Especiais')
//TODO: Acrescentar Exemplos


// Exemplo De Convertendo Tipos De Dados No Tipo String
console.log('\n Exemplo De Convertendo Tipos De Dados No Tipo String')

const test = () => {}

let aux1 = 'string test'
let aux3 = String(test)
let aux4 = aux3.toString()

console.log(typeof aux1, typeof aux3, typeof aux4)

aux = undefined
// console.log(x.toString()) // Dá erro pq o .toString() vai buscar o contúdo de aux no local de  memória 
                             // o qual aux está referenciando. Mas os tipos Undefined e Null não possuem  
                             // referência de memória ?????

// Exemplo De new String() x String()
console.log('\n Exemplo De new String() x String() ')

let aux2 = new String(test) // Não é uma boa prática
console.log(typeof aux2, aux2, typeof aux3, aux3, aux2.toString())
console.log(aux2 == aux3, aux2 === aux3 ) // o conteúdo retornado é o mesmo, mas o tipo de dado é diferente


// let strrr = new String(aux) // TODO: Dá erro, mas pq? não tem referencia na memoria?
// let strrr = new String(null) // TODO: Dá erro, mas pq? não tem referencia na memoria?
// let strrr = new String(undefined) // TODO: Dá erro, mas pq? não tem referencia na memoria?
let strrr = new String(typeof(aux)) 
console.log('\n', String(null), String(undefined), strrr, typeof strrr)

console.log(strrr.String, strrr[5])

const str2 = { String: null }
console.log('\n\n toString() x String(), linha 39')
console.log(str2.String, str2[5])

// Exemplo De
console.log('\n Exemplo De ')



// Exemplo De
console.log('\n Exemplo De ')


// Exemplo De
console.log('\n Exemplo De ')


// Exemplo De
console.log('\n Exemplo De ')

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

// Exemplo eval
s1 = "2 + 2";               
s2 = new String("2 + 2"); 
console.log('\n Ecemplo eval')  
console.log(eval(s1));      
console.log(eval(s2));
console.log(eval(s2.valueOf()));


