// ############## String ##########################

// Exemplo De
console.log('\n Exemplo De \n')


// Exemplo De
console.log('\n Exemplo De \n')

/*
As funções parseInt() e parseFloat() fazem a conversão da string até alcançarem um 
caracter que não é válido para o formato numérico especificado, então elas 
retornam o número convertido até aquele ponto. Contudo, o operador "+" simplesmente 
converte a string em NaN  se tiver algum caracter inválido nela. 
Apenas tente por si mesmo converter a string "10.2abc" usando cada um desses métodos 
no console e entenderá melhor essas diferenças.
*/

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
// console.log(test.toString(), test, test.Function)

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
const strUnd = new String(undefined)
console.log('\n Exemplo eval')  
console.log(eval(s1))   
console.log(eval(s2))
console.log(eval(s2.valueOf()))
console.log(eval(new String(undefined)))
console.log(strUnd)

