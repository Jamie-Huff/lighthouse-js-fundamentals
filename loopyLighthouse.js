// if % 3 print Loopy
// if % 4 print Lighthouse
// if % 3 and 4 print "LoopyLighthouse"

let num = 100
for (num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log ('LoopyLighthouse');
  } else if (num % 3 === 0) {
    console.log ('Loopy');
  } else if (num % 4 === 0) {
    console.log ('Lighthouse')
  } else {
    console.log(num)
  }
}
