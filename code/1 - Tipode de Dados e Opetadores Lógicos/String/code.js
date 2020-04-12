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