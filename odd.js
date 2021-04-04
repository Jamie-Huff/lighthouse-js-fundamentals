// function to seperate even and odd number address



let isOdd = function (address) {
  if (address % 2 === 0) {
    return false
  } else {
    return true
  }
}

let printAnswer = function(address) {
  console.log(`${address} is odd: ${isOdd(address)}`);
}

printAnswer(5);
printAnswer(123912839);