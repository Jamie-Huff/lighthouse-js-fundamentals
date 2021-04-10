const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// while loop that lists the contents of the ingredients array
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i])
  i++;
}
console.log('\n')


// For loop that lists the contents of the ingredients array

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log('\n')

// For loop that lists the contents of the ingredients array backwards
for (i = ingredients.length -1; i >= 0; i--) {
  console.log(ingredients[i])
}