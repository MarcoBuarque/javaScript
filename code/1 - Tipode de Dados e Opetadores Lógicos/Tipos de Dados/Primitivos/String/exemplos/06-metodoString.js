// ############## String ##########################

// Exemplo De new String() x String()
console.log('\n Exemplo De new String() x String()\n')

let aux2 = new String(test) // Não é uma boa prática
console.log(typeof aux2, aux2, typeof aux3, aux3, aux2.toString())
console.log(aux2 == aux3, aux2 === aux3 , '\n') // o conteúdo retornado é o mesmo, mas o tipo de dado é diferente


// let strrr = new String(aux) // TODO: Dá erro, mas pq? não tem referencia na memoria?
// let strrr = new String(null) // TODO: Dá erro, mas pq? não tem referencia na memoria?
// let strrr = new String(undefined) // TODO: Dá erro, mas pq? não tem referencia na memoria?
let strrr = new String(typeof(aux)) 
console.log('\n', String(null), String(undefined), strrr, typeof strrr, strrr.String, strrr.valueOf(), '\n')

const str2 = { String: null }
console.log(str2, str2.String, typeof str2.String, str2.toString(), String(str2.String))
