/* Run through a loop until x reaches a certain value
At every number it will check a series of possible equations and print out
a specific string if the output matches what is described in the equation.
In this case we are checking for divisibility
*/
var x = 1;

while (x <= 20) {
    
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('JuliaJames');
    } else if (x % 5 === 0) {
        console.log('James');
    } else if (x % 3 === 0) {
        console.log('Julia')
    } else {
        console.log(x)
    }x = x + 1
}
