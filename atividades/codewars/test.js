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


  const atv1 = () => {
    
    /*  
        Write a function that takes an integer as input, and returns the number of bits 
        that are equal to one in the binary representation of that number. 
        You can guarantee that input is non-negative. 
    */
    
    //   Example: The binary representation of 1234 is 10011010010, so the function should 
    //   return 5 in this case4 is 10011010010, so the function should return 5 in this case
    }
        
    const atv2 = () => {
    // https://www.codewars.com/kata/54b724efac3d5402db00065e/javascript
    }

    const atv1 = () => {
      // https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca/train/javascript
      function solve(arr){
        let nreArray = arr.map(item => {
          // if (item.includes('Begin')) {
          //       return item.replace('Begin', 'Right')
          //     }
          return item.includes('Left') ? item.replace('Left', 'Right') : item.replace('Right', 'Left')
        })
    
        // nreArray[0].replace('Begin', 'Right')
        // console.log('aaa',nreArray[0], nreArray)
        let revertArray = nreArray.reverse()
        revertArray[0].includes('Left') ? revertArray[0].replace('Left', 'Begin') : revertArray[0].replace('Right', 'Begin')
    
        return revertArray
        // .map((item, index, arr) => {
        //   console.log('arr', arr)
        //   if (index === 0) {
        //     return item.includes('Left') ? item.replace('Left', 'Begin') : item.replace('Right', 'Begin')
        //   }
        //   if (index === 1) {
        //     return item.includes('Left') ? item.replace('Left', 'Right') : item
        //   }
        //   if (item.includes('Begin')) {
        //     return arr[0].includes('Left') ? item.replace('Begin', 'Right') : item.replace('Begin', 'Left')
        //   }
          
        //   return item.includes('Left') ? item.replace('Left', 'Right') : item.replace('Right', 'Left')
        // })
      } 
      // console.log(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']), ['Begin on 9th Dr', 'Left on First Road', 'Left on 3rd Blvd']);
      // console.log(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]),['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']);
      // console.log(solve(['Begin on Road A']),['Begin on Road A'])
      console.log(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]), 
      ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A'])
      // console.log(solve(['Begin A','Right','Right','Left','Left','Left','Right','Left','Right','Left R']))
      // TODO
    }
