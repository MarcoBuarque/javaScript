console.log('\ntypeof(!![]) === typeof(false):', typeof(!![]) === typeof(false))

console.log('\ntypeof true === "boolean":', typeof true === 'boolean')
console.log("\ntypeof false === 'boolean':", typeof false === 'boolean')
console.log("\ntypeof Boolean(1) === 'boolean':", typeof Boolean(1) === 'boolean')
console.log("\ntypeof !!(1) === 'boolean':", typeof !!(1) === 'boolean')

const test = new Boolean(true)
const aux = new Boolean(test) // Não é recomendado utilizar o objeto Boolean para converter expressões
const aux2 = Boolean(test)

console.log('!![], !!func, new Boolean(func), Boolean(func)')
console.log(aux == aux2, aux === aux2)

console.log('\ntypeof(!![]) === typeof(new Boolean(true)):', typeof(!![]) === typeof(test))
console.log('\nnew Boolean(test) == Boolean(test), new Boolean(test) === Boolean(test)')
console.log("\ntypeof new Boolean(1) === 'boolean':", typeof new Boolean(1) === 'boolean')
console.log('\ntypeof(new Boolean(true)) === typeof(true):', typeof(test) === typeof(true))