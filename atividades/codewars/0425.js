const atv1 = () => {
// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

  function findOdd(A) {
    let arrAux = []
    return A.find((item, index, arr) => {
      let total = 0
      if (!arrAux.includes(item)) {
        arrAux.push(item)
        arr.map(itemMap => {
          if (item === itemMap) {
            total += 1
          }
        })
      }
      return total % 2 > 0
    })
  }

  const finOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

  // Segue a mesma lógica do findOdd, mas no filter ele percorrerá os itens repetidos (que já foram verificados)
  const findOdd3 = arr => {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
  console.log(finOdd2([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
  console.log(finOdd3([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

}
    
const atv2 = () => {
// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/javascript
  function tickets(peopleInLine){
    const tickValue = 25
    const banknotes = {"100": 0, "50": 0, "25": 0}

    const validate = !peopleInLine.find(bill => {
      const rest = bill - tickValue
      const rest50 = Math.trunc(rest / 50)
      
      if(banknotes["50"] - rest50 >= 0) {
        banknotes["50"] -= rest50
        banknotes["25"] -= rest50 ? Math.trunc((rest - (50 * rest50)) / 25) : Math.trunc(rest / 25)
      } else {
        banknotes["25"] -=  Math.trunc(rest / 25)
      }

      banknotes[bill] ++
      
      return banknotes["25"] < 0
    })
    return validate ? 'YES' : 'NO'
  }
  console.log(tickets([25, 100]))
  console.log(tickets([25,50,25,100,25,50,25,100,25,25,50,100]))
  console.log(tickets([25,25,50,100,25,25,50,100,25,25,25,100,25,50,25,100 ]))
  console.log(tickets([25,25,50,100,25,25,50,100,25,50,25,100,25,25,50,100]))
  console.log(tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,25,25,100]))
  console.log(tickets([25,25,50,100,25,25,50,100,25,50,25,100,25,50,25,100 ]))
  console.log(tickets([25,25,50,100,25,50,25,100,25,50,25,100,25,50,25,100]))
}

const atv3 = ()=> {
  // https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
  function findUniq(arr) {
    let item
    let index = 0
    
    while(index < arr.length  && !Number(item)){
      if(!(arr[index] === arr[index + 1] || arr[index] === arr[index + 2]|| arr[index] === arr[index - 1])) {
        item = arr[index]
      }
      index++
    }

    return item
  }

  function findUniq2(arr) {
    arr.sort((a,b) => a - b)
    console.log(arr)
    return arr[0] == arr[1] ? arr.pop() : arr[0]
  }
  
  function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
  }

  console.log(findUniq([ 1, 1, 1, 1, 1, 1, 2 ]))
  console.log(findUniq2([ 1, 1, 1, 1, 2, 1, 1, ]))

}

const atv4 = () => {
  // https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
  function validParentheses(parens){
    const emptyList = parens.length === 0
    const validateFirst = parens[0] === '('
    let occurrence = Number(validateFirst)
    let index = 1
    
    while (validateFirst && occurrence >= 0 && index < parens.length) {
      if(parens[index] === ')' || parens[index] === '(') {
        occurrence = parens[index] !== ')' ? ++occurrence : --occurrence
      }
      ++index
    }
  
    return emptyList || (occurrence === 0 && index > 1)
  }

  console.log(Number(false), Number(true) , true + 1)
  console.log(validParentheses('()()()()()()()((()))()()()()()(()('), '  expected:', false) //false
  console.log(validParentheses(')(()))'), '  expected:', false)
  console.log(validParentheses('(())((()())())'), '   expected:', true)
  console.log(validParentheses('(())((()())()))'), '  expected:', false)
  console.log(validParentheses(')'), '  expected:', false)
  console.log(validParentheses('('), '  expected:', false)
  console.log(validParentheses('() '), '   expected:', true)
  console.log(validParentheses(')(()))'), '  expected:', false) // false
  console.log(validParentheses('(())((()())())'), '   expected:', true) // true
  console.log(validParentheses(''))

  
}

atv4()
