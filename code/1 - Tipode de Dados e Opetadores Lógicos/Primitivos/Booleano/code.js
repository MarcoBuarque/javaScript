const test7 = () => {}

const test = new Boolean(true)
const aux = new Boolean(test7)
const aux2 = Boolean(test7)

console.log('!![], !!test7, new Boolean(test7), Boolean(test7)')
console.log(!![], !!test7, aux, aux2)

console.log('\nBoolean(test7) == Boolean(test7), new Boolean(test7) === Boolean(test7)')
console.log(aux == aux2, aux === aux2)

console.log('\ntypeof(!![]) === typeof(false):', typeof(!![]) === typeof(false))
console.log('\ntypeof(!![]) === typeof(new Boolean(true)):', typeof(!![]) === typeof(test))
console.log('\ntypeof(new Boolean(true)) === typeof(true):', typeof(test) === typeof(true))

console.log('\ntypeof true === "boolean":', typeof true === 'boolean')
console.log("\ntypeof false === 'boolean':", typeof false === 'boolean')
console.log("\ntypeof Boolean(1) === 'boolean':", typeof Boolean(1) === 'boolean')
console.log("\ntypeof new Boolean(1) === 'boolean':", typeof new Boolean(1) === 'boolean')
console.log("\ntypeof !!(1) === 'boolean':", typeof !!(1) === 'boolean')

// test = new Boolean(null) // TODO Não pode ser utilizado
// test = new Boolean(undefined) // TODO Não pode ser utilizado
// console.log(test)
console.log('\ntestando a função construtora Boolean(), linha 23')
console.log(!!null, !!undefined, Boolean(undefined))

test = true
