// const array = [1, 5, 3, 2, 30]
// const array2 = [1, 2, 5, 5]

// //console.log(array.sort())
// //console.log(array.sort((itemA, itemB) => itemB - itemA))

// //console.log(array.find((item, index) => item === array2[index]))
// let test = () => {}

// // console.log(typeof(null), typeof(undefined), typeof(number), typeof(BigInt), typeof(string), typeof(Symbol), typeof(Object), typeof(test), typeof(1.001))

// const o1 = {}

// const o2 = []

// const wm1 = new WeakMap()
// wm1.set(o1, 37);
// wm1.set(o2, 'azerty');

// //console.log(wm1.get(o2), wm1.get(o1))

// wm1.has(o1);
// wm1.delete(o1);
// wm1.has(o1);

// let test2 = 'um teste aqui'
// teste2 = 'um teste aq1'

// console.log(teste2.charAt(1))

// const test8 = 'aaaa strirng'

// test8.concat('aaaaa')

// const test7 = () => {}

// test = new Boolean(true)
// console.log(!![], !!test7, typeof(!![]) == typeof(test), typeof(test) === typeof(true))




// function makeFunc() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log('aaa', name);
//   }
//   return displayName;
// }
// console.log(makeFunc())
// console.log(makeFunc)

// function makeFunc2() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log('aaa2', name);
//   }
//   return displayName();
// }
// console.log(makeFunc2())
// console.log(makeFunc2)

const obj1 = { name: 'Marco', idade: 21, objName: new String('Marco'), objIdade: new Number(21)}
const obj2 = {...obj1}
console.log(obj2)

const test = [{"abbr": "", "balance": 0, "canFreeze": false, "canStake": false, "canVotes": false, "family": 1, "fixed": true, "hasTokens": false, "hide": true, "hidePortfolio": true, "icon": {"uri": "https://tronwallet.github.io/tokens/trc20/TKTcfBEKpp5ZRPwmiZ8SfLx8W7CDZ7PHCY.png"}, "id": "TKTcfBEKpp5ZRPwmiZ8SfLx8W7CDZ7PHCY", "isERC20": false, "isTRC20": false, "name": "TWX", "precision": 6, "showFamily": true, "unconfirmedBalance": 0}, {"abbr": "", "balance": 0, "canFreeze": false, "canStake": false, "canVotes": false, "family": 1, "fixed": true, "hasTokens": false, "hide": true, "hidePortfolio": true, "icon": {"uri": "https://tronwallet.github.io/tokens/trc10/1001580.png"}, "id": "1001580", "isERC20": false, "isTRC20": false, "name": "TWLT", "precision": 0, "showFamily": true, "unconfirmedBalance": 0}, {"abbr": "", "balance": 0, "canFreeze": false, "canStake": false, "canVotes": false, "family": 1, "fixed": false, "hasTokens": false, "hide": true, "hidePortfolio": true, "icon": {"uri": ""}, "id": "testt45", "isERC20": false, "isTRC20": false, "name": "TESTTRC20", "precision": 6, "showFamily": true, "unconfirmedBalance": 0}, {"abbr": "TESTTRC10", "balance": 0, "canFreeze": false, "canStake": false, "canVotes": false, "family": 1, "fixed": false, "hasTokens": false, "hide": true, "hidePortfolio": true, "icon": {"uri": ""}, "id": "1002000", "isERC20": false, "isTRC20": false, "name": "TESTTRC10", "precision": 6, "showFamily": true, "unconfirmedBalance": 0}, {"abbr": undefined, "balance": 0, "canFreeze": false, "canStake": false, "canVotes": false, "family": 1, "fixed": true, "hasTokens": false, "hide": true, "hidePortfolio": true, "icon": {"uri": ""}, "id": "TKTcfBEKpp5ZRPwmiZ8SfLx8W7CDZ7PHCY", "isERC20": false, "isTRC20": false, "name": "TWX", "precision": 6, "showFamily": true, "unconfirmedBalance": 0}]
const arrAux = []
const mergeList = test.filter((item) => {
  if (!arrAux.includes(item.id)) {
    arrAux.push(item.id)
    return true
  }
  return false
})

console.log('mergelist', mergeList.length, test.length)