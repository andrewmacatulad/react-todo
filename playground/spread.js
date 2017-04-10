function add (a, b, c) {
  return a + b - c;
}

console.log(add(3, 1, 2));

var toAdd = [9, 5, 4];

// use the ...toAdd so all the items in the array will be called
console.log(add(...toAdd))

var groupA = ['Plue', 'Bot'];

var groupB = ['Tob', 'eulP'];

// this will combine arrays inside an array
var final = [groupB, 3, ...groupA];

console.log(final)

var person = ['Andrew', 28];
var personTwo = ['Plue', 1];

// this will make a function that will output Hi Andrew, you are 28 and Hi Plue you are, 1
function greet (name, age){
  console.log('Hi ' + name + ', you are ' + age);
}

// use spread so you can get the two items in the array for both variables
greet(...person);
greet(...personTwo);


var names = ['Mike', 'Ben'];
// this will add the name items with spread together with Andrew arrays
var final = [...names, 'Andrew'];


final.forEach(function(items){
  console.log("Hi " + items)
})
