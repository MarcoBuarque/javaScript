// ############## String ##########################

// Exemplo De new String() x String()
console.log('\n Exemplo De new String() x String()\n')

const test = () => {}
aux = undefined

const aux1 = 'string test'
const aux3 = String(test)
const aux2 = new String(test) // Não é uma boa prática
console.log(typeof aux2, aux2, typeof aux3, aux3, aux2.toString(), test.toString())
console.log(aux2 == aux3, aux2 === aux3 , '\n') // o conteúdo retornado é o mesmo, mas o tipo de dado é diferente


let strrr = new String(aux) 
console.log('str', strrr, typeof strrr, strrr.String, strrr.valueOf())
strrr = new String(typeof(aux)) 
console.log('str', strrr, typeof strrr, strrr.String, strrr.valueOf())

strrr = new String('aux') 
console.log('str', strrr, typeof strrr, strrr.String, strrr.valueOf())
strrr = new String(typeof('aux')) 
console.log('str', strrr, typeof strrr, strrr.String, strrr.valueOf())

console.log('\n null', String(null), new String(null))
console.log('\n undefined', String(undefined), new String(undefined))

const str2 = { String: null }
console.log(str2, str2.String, typeof str2.String, str2.toString(), String(str2.String))
