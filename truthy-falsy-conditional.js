let hairyDog = false;
let dog;

if (hairyDog) {
  console.log('You need to brush that pup!')
  dog = ['Husky', 'Golden Retriever', 'Alaksan malamute']
} else if (!hairyDog) {
  console.log('Smart choice! No hair shedding')
  dog = ['Corgi', 'Jack Russel', 'Whippet']
}

let random = dog[Math.floor(Math.random() * (dog.length))];
console.log(`You probably own somthing like a ${random}.`);
