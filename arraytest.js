// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...

iceCreamFlavours.push('root beer')
console.log(iceCreamFlavours)

console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[5]);
console.log(iceCreamFlavours.length);

console.log("Bob" || " Marley")
console.log("Jeremy" > "Khurram")
console.log(5 * '3')

const areMultiples  = function (bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
}

console.log(areMultiples(15, 4));

const vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week off, not bad.");
} else {
  console.log("We're gonna have a great time!");
}
