// print out all possible seat combinations in a theater
// the theater has 26 rows, and 100 seats per row

let seat = 0
let row = 0

for (let row = 0; row <= 25; row++) {
  for (let seat = 0; seat <= 99; seat++) {
    console.log(`${row}-${seat}`)
  }
}
