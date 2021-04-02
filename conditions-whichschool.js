// Help learners decide which school they should attend //

let age = 12
let schoolChoice;

let whichSchool = function whichSchool(age) {
  if (age < 13) {
    return schoolChoice = 'Elementary School'
  } else if (age >= 13 && age <= 18) {
    return schoolChoice = 'Secondary School'
  } else {
    return schoolChoice = 'Lighthouse Labs'
  }
}

console.log(whichSchool(21))