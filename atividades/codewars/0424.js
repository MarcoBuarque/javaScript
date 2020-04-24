const atv1 = () => {
//   Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
  function alphabetPosition(text) {
    text = text.toLowerCase()
    let strReturn = ''
    for(let i = 0; i < text.length; i++){
      // In UTF-16 a = 96
      // console.log(text[i], text.charCodeAt(i) - 96)
      // console.log(text[i], text.codePointAt(i))
      const number = text.codePointAt(i)
      if(number > 96 && number <= 122)
      strReturn += `${number - 96} `
    }
    return strReturn.slice(0, strReturn.length - 1)
  } 

  str2 = alphabetPosition("The sunset sets at twelve o' clock.")
  console.log(str2 === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
  str2 = alphabetPosition("The narwhal bacons at midnight.")
  console.log(str2 === "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")
}

const atv2 = () => {
  var isSquare = function(n) {
    return Number.isInteger(Math.sqrt(n))
  }
  console.log(isSquare(-1))
  console.log(isSquare(0))
  console.log(isSquare(3))
  console.log(isSquare(4))
  console.log(isSquare(25))  
  console.log(isSquare(26))
}

const atv3 = () => {
//   The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

  function openOrSenior(data){
    return response = data.map(person => {
      const age = person[0]
      const score = person[1]

      if (age >= 55 && score > 7) {
        return 'Senior'
      }

      return 'Open'
    })
    // UMa solução melhor
    // return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
  }
  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
}

const atv4 = () => {
  // Regex validate PIN code
  // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

  // If the function is passed a valid PIN string, return true, else return false.

  // eg:

  // validatePIN("1234") === true
  // validatePIN("12345") === false
  // validatePIN("a234") === false

  function validatePIN (pin) {
    let result = (pin.length === 4 || pin.length === 6) && !pin.includes('-') && !pin.includes('.') && !pin.includes(' ') && !pin.includes('\n')
    let index = 0
    while (result === true && index < pin.length) {
      const num = Number(pin[index])
      result = Number.isInteger(num)
      // result = Number.isInteger(Number(pin[index]))
      index++
    }
    return result

    // com expressão regular
    // return /^(\d{4}|\d{6})$/.test(pin)
  }

  // function validatePIN (pin) {
  
  //   var pinlen = pin.length;
  //   var isCorrectLength = (pinlen == 4 || pinlen == 6);
  //   var hasOnlyNumbers = pin.match(/^\d+$/);
      
  //   if(isCorrectLength && hasOnlyNumbers){
  //     return true;
  //   }
    
  //   return false;
  
  // }
  console.log(validatePIN("123 "),false, "Wrong output for '123 '");
  console.log(validatePIN("123\n"),false, "Wrong output for '123\n '");
  console.log(validatePIN("09876"),false, "Wrong output for '09876 '");

  // console.log(validatePIN("1"),false, "Wrong output for '1'")
  // console.log(validatePIN("12"),false, "Wrong output for '12'")
  // console.log(validatePIN("123"),false, "Wrong output for '123'")
  // console.log(validatePIN("12345"),false, "Wrong output for '12345'")
  // console.log(validatePIN("1234567"),false, "Wrong output for '1234567'")
  // console.log(validatePIN("-1234"),false, "Wrong output for '-1234'")
  // console.log(validatePIN("1.234"),false, "Wrong output for '1.234'")
  // console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
  // console.log(validatePIN("00000000"),false, "Wrong output for '00000000'")

  // console.log(validatePIN("a234"),false, "Wrong output for 'a234'")
  // console.log(validatePIN(".234"),false, "Wrong output for '.234'")

  // console.log(validatePIN("1234"),true, "Wrong output for '1234'");
  // console.log(validatePIN("0000"),true, "Wrong output for '0000'");
  // console.log(validatePIN("1111"),true, "Wrong output for '1111'");
  // console.log(validatePIN("123456"),true, "Wrong output for '123456'");
  // console.log(validatePIN("098765"),true, "Wrong output for '098765'");
  // console.log(validatePIN("000000"),true, "Wrong output for '000000'");
  // console.log(validatePIN("123456"),true, "Wrong output for '123456'");
  // console.log(validatePIN("090909"),true, "Wrong output for '090909'");
}



atv4()