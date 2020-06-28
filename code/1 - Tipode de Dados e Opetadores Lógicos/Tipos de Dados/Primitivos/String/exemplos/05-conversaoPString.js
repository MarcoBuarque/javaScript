// ############## String ##########################

// Exemplo De Convertendo Tipos De Dados No Tipo String
console.log('\n Exemplo De Convertendo Tipos De Dados No Tipo String')

const test = () => {}

const aux1 = 'string test'
const aux3 = String(test)
const aux4 = aux3.toString()

console.log(typeof aux1, typeof aux3, typeof aux4)

aux = undefined
// console.log(x.toString()) // Dá erro pq o .toString() vai buscar o contúdo de aux no local de  memória 
                             // o qual aux está referenciando. Mas os tipos Undefined e Null não possuem  
                             // referência de memória ?????