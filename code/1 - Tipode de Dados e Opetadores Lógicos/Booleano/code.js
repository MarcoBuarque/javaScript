const test7 = () => {}

const test = new Boolean(true)
const aux = new Boolean(test7)
const aux2 = Boolean(test7)

console.log('!![], !!test7, aux, aux2')
console.log(!![], !!test7, aux, aux2)

console.log('\naux == aux2, aux === aux2')
console.log(aux == aux2, aux === aux2)

console.log('\ntypeof(!![]) === typeof(false):', typeof(!![]) === typeof(false))
console.log('\ntypeof(!![]) === typeof(test):', typeof(!![]) === typeof(test))
console.log('\ntypeof(test) === typeof(true):', typeof(test) === typeof(true))

console.log('\ntypeof true === "boolean":', typeof true === 'boolean')
console.log("\ntypeof false === 'boolean':", typeof false === 'boolean')
console.log("\ntypeof Boolean(1) === 'boolean':", typeof Boolean(1) === 'boolean')
console.log("\ntypeof new Boolean(1) === 'boolean':", typeof new Boolean(1) === 'boolean')
console.log("\ntypeof !!(1) === 'boolean':", typeof !!(1) === 'boolean')
