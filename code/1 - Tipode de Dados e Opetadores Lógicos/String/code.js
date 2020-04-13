// ############## String ##########################
const test = () => {}
let aux1 = 'string test'
let aux2 = new String(test)
let aux3 = String(test)
let aux4 = aux2.toString()
console.log(typeof aux1, typeof aux2, typeof aux3, typeof aux4)
console.log()

const imut = 'string imutavel'
imut.concat('alolo')
console.log(imut)


// Imutável
let test8 = 'aaaa string'

let str = test8.concat('aaaaa')
test8.concat('aaaaa')
console.log(test8, str)

// toString() x String()

aux = undefined
let strrr = new String(typeof(x)) // Dá erro, mas pq? não tem referencia na memoria?
// console.log(x.toString())
console.log(String(null), String(undefined), strrr, typeof strrr)

console.log(strrr.String, strrr[5])

const str2 = { String: null }
console.log(str2.String, str2[5])

strrr = `template`
console.log(typeof strrr)

console.log(test.toString(), test, test.Function)

str = 'string test string'
let concat = str.lastIndexOf('string')

console.log(concat)