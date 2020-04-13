const array = [1, 5, 3, 2, 30]
const array2 = [1, 2, 5, 5]

//console.log(array.sort())
//console.log(array.sort((itemA, itemB) => itemB - itemA))

//console.log(array.find((item, index) => item === array2[index]))
let test = () => {}

// console.log(typeof(null), typeof(undefined), typeof(number), typeof(BigInt), typeof(string), typeof(Symbol), typeof(Object), typeof(test), typeof(1.001))

const o1 = {}

const o2 = []

const wm1 = new WeakMap()
wm1.set(o1, 37);
wm1.set(o2, 'azerty');

//console.log(wm1.get(o2), wm1.get(o1))

wm1.has(o1);
wm1.delete(o1);
wm1.has(o1);

let test2 = 'um teste aqui'
teste2 = 'um teste aq1'

console.log(teste2.charAt(1))

const test8 = 'aaaa strirng'

test8.concat('aaaaa')

const test7 = () => {}

test = new Boolean(true)
console.log(!![], !!test7, typeof(!![]) == typeof(test), typeof(test) === typeof(true))




