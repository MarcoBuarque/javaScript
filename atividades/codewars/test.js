function solution(...number){
    let result  = 0
    for (let i = 0; i < number.length; i++) {
      if(number[i] % 3 === 0 || number[i] % 5 === 0){
        result += number[i]
      }
    }
    return result
  }
  // console.log(solution(1,2,3,4,5,6,7,8,9))



