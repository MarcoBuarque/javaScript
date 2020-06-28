const atv1 = () => {
  // https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
  const abbrevName = name => {
    let abbrev = `${name[0]}.`
    const index = name.indexOf(' ')

    return abbrev.concat(name[index + 1]).toUpperCase()
  }

  console.log(abbrevName('Sam Harris'), 'S.H')
  console.log(abbrevName('Patrick Feenan'), 'P.F')
  console.log(abbrevName('P Favuzzi'), 'P.F')
  console.log(abbrevName('David Mendieta'), 'D.M')
}

const atv2 = () => {
  // https://www.codewars.com/kata/5888cba35194f7f5a800008b/  
  const asteriscIt = n => { 
    let number = Array.isArray(n) ? String(n).split(',').join('') : String(n)
    let arr = number.length > 1 ? '' : number

      if (number.length > 1) {
        for (let i = 0; i < number.length; i++) {
          let aux = number[i]
          if (Number(number[i]) % 2 === 0 && Number(number[i + 1]) % 2 === 0 && i < number.length - 1) {
            aux = `${number[i]}*`
          }
          arr = arr.concat(aux)
        }
      }

      return arr
  }

  // console.log(asteriscIt(5312708), 'Expected: 531270*8')
  // console.log(asteriscIt('0000'), 'Expetec: 0*0*0*0')
  console.log(asteriscIt([1, 4, 64, 68, 67, 23, 1]), 'Expetec: 14*6*4*6*8*67231')
  // console.log(asteriscIt(1), 'Expected 1')
  // console.log(asteriscIt(2), 'Expected 2')

}

const atv3 = () => {
  // https://www.codewars.com/kata/5803a6d8db07c59fff00015f

  

}

const atv4 = () => {

}

atv2()