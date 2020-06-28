// ############## String ##########################

// Exemplo De Propriedade
console.log('\n Exemplo de propriedade\n')

let str = 'primeira string'
let otherStr = 'outra string'

console.log('str.length', str.length)

str = 'String test'
const strSpace = 'String  teste '
console.log(`"${str}"`, str.length, `"${strSpace}"`, strSpace.length)

// Exemplo Principais Métodos 
console.log('\n Exemplo Principais metodos\n')

console.log('Concatenação:')
console.log('str:', str, 'otherStr:', otherStr)
console.log('Usando .concat()', str.concat(' ', otherStr, ' mais test'))
console.log('Concatenação com +', str + ' ' + otherStr + ' mais test')
console.log('\n')

str = '  teste  com trim '
otherStr = ' um test com etc'
console.log('str.trim()')
console.log('Normal:', `"${str}"`, 'length:', str.length,)
console.log('Com trim:', `"${str.trim()}"`, 'length:', str.trim().length )
console.log('\n')

str = 'fruta gostosa abacaxi'
console.log('str.includes(sunStr)')
console.log('Normal:', str)
console.log('str.inclues("baca")', str.includes('baca'))
console.log('str.includes("bacca")', str.includes('bacca'))
console.log('\n')

// str = 'BrasIl test ção'
str = 'primeira: \u1E9B segunga \u0323 terceira \u0327'
console.log('str.normalize')
console.log('NFC', str.normalize()) // O padrão NFC já é o default
console.log('NFD', str.normalize('NFD'))
console.log('NFKC', str.normalize('NFKC'))
console.log('NFKD', str.normalize('NFKD'))
console.log('\n')

console.log('str.')
console.log('\n')

console.log('str.')
console.log('\n')
// TODO: acrescentar mais exemplos
