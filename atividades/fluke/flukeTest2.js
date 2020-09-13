/*
Restrições:
  - 1 < n <100
  - É garantido que este é um número ímpar.
  - 0 < arr[i] < 100 onde 0 < i < n
*/

const getOddNumber = (arr) => {
    const restricoesError = new Error(`O array não atende aos requisitos`)
    const num = arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
    
    if (num <= 1 || num >= 100 || num  % 2 === 0) {
        throw restricoesError
    }

    for (let index = 1; index < num; index++) {
        if (arr[index] <= 0 || arr[index] >= num) {
            throw restricoesError
        }
    }

    return num
}

const arrayTest = [[1,1,3,3,2 ],[1,1,2,3,2], [1,1,2,9,9,5,5,7], [1,1,2,9,9,5,5,11]]
const objResponse = {}

arrayTest.forEach((array, index) => {
    try {
        const num = getOddNumber(array)
        objResponse[index] = {
            array,
            num
        }
    } catch (error) {
        objResponse[index] = {
            array,
            message: error.message
        }
    }
})

console.log(objResponse)