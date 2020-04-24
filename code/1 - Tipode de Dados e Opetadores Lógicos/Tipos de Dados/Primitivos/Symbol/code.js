// var sym = Symbol("foo");
// var obj = {[sym]: 1, test: 'aar', "okok": 5};
// obj[sym]
// console.log(obj[sym])           // 1
// console.log(obj[Object(sym)])           // 1
// obj[Object(sym)];    // still 1

// var obj2 = {sym: 'ola'} // assim n chama o symbol
// console.log(obj,obj2)
// console.log(sym)
// console.log('\n', Object.getOwnPropertyNames(obj))
// console.log('\n', Object.getOwnPropertySymbols(obj))
// console.log('\n', Object.getOwnPropertyNames(obj2))
// console.log('\n', Object.getOwnPropertySymbols(obj2))

// const directions = {
//     RIGHT: Symbol('Right'),
//     LEFT: Symbol('Left')
// }

// console.log('\n', directions.RIGHT)
// console.log('\n', directions.LEFT)

const idSymb = Symbol('id')
const obj = {
    id: 4577,
    [idSymb]: 'pçaaa' 
}

console.log(obj, obj.idSymb)

obj.idSymb = 88
console.log(obj, obj.idSymb)

obj[idSymb] = 'oas'

console.log(obj, obj.idSymb)

const obj2 = {
    id: 4577,
    [idSymb]: 'pçaaa' 
}

console.log(obj, obj2)

obj2[idSymb] = 'change2'

console.log(obj, obj2)

coçocar os dois objetos dentro de um onjeto e chamar o getOwnPropertySymbol