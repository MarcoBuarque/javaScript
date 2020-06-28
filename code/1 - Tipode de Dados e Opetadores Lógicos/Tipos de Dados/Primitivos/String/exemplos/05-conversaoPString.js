// ############## String ##########################

// Exemplo De Convertendo Tipos De Dados No Tipo String
console.log('\n Exemplo De Convertendo Tipos De Dados No Tipo String')

const test = () => {}

const aux1 = 'string test'
const aux3 = String(test)
const aux4 = aux3.toString()

console.log(typeof aux1, typeof aux3, typeof aux4)

const aux = undefined
  // console.log(aux.toString()) // Error

const func = () => 10
console.log('{}:', {}.toString(), '[]:', [].toString(), 'function:', func.toString(), 'Function return', func().toString())