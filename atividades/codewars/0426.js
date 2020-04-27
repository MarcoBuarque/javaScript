const atv1 = () => {
  // https://www.codewars.com/kata/5904d222e1bfd3354e000026/train/javascript
  function removeDuplication2(arr){
    let aux = []
    let i = 0
     while (i < arr.length) {
      if (aux.includes(arr[i])) {
        arr = arr.filter(element => element !== arr[i])
        aux = []
        i = 0
      } else {
        aux.push(arr[i])
        ++i
      }
    }
    return arr
  }

  const removeDuplication = arr => {
    
    Array.from(new Set(arr))
  }
    
  
  // const removeDuplication = a => a.filter( v => a.indexOf(v)===a.lastIndexOf(v) )

  console.log(removeDuplication([2,5,6,7,5,2,6] ))
  console.log(removeDuplication([1,2,3,2,4,6,2,6,7]))
  console.log(removeDuplication([1,2,1,2,1,1,2,2] ))
}

const atv2 = () => {
  // https://www.codewars.com/kata/59aa6567485a4d03ff0000ca/train/javascript
  const isPrime = (num) => {
    let dividers = 1
  
    for (let x = 2; x < num && dividers === 1; x++) {
      if (num % x === 0) {
        ++dividers
      }
    }
    return dividers === 1
  }

  let numberTested = []

  const canReduceToOne = (num) => {
    let numberString = num > 1 ? String(num) : 145
    let auxTested = []

    while(numberString != 1 && numberString != 145) {
      const num = Number(numberString)
      let aux = 0

      if (numberTested.includes(num)) {
        numberString = '1'
      } else {
        auxTested.push(num)

        for (let y = 0; y < numberString.length; y++) {
          aux += Number(numberString[y]) ** 2
        }
        numberString = String(aux) 
      }
    }

    if (numberString == 1) {
      numberTested.push(...auxTested)
      // const uniqueSet = new Set(numberTested)
      // numberTested = [...uniqueSet]
      numberTested = Array.from(new Set(numberTested))

      // ou
      // numberTested.filter((item, index) => numberTested.indexOf(item) === index)

      return true
    }

    return false
  }


  const solve = (a, b) => {
    let canReduce = 0

    for (let i = a; i < b; i++) {
      if (isPrime(i)) {
        canReduce = canReduceToOne(i) ? ++canReduce : canReduce
      }
    }
    return canReduce
  }  
  console.log(solve(0, 5), numberTested)
  console.log(solve(1, 5), numberTested)
  console.log(solve(1,25),'expected:', 4, numberTested); 
  console.log(solve(100,1000),'expected:', 28,  numberTested); 
  console.log(solve(100,2000),'expected:', 47 , numberTested); 
  console.log(solve(100,3000),'expected:', 65, numberTested);
  console.log(solve(44980,44990),'expected:', 95, numberTested);
  
}

atv1()
