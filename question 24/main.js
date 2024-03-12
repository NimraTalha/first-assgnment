var num1 = 10;
var num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
var ali = 10;
var nimra = 5;
var atika = 3;
console.log(ali > nimra && nimra > atika); // true
console.log(atika > ali || ali < nimra); // false
// whether item is in array
var fruits = ["apple", "banana", "cherry"];
console.log("Is apple in fruits?");
console.log(fruits.includes("apple")); //true
// whether item is not in array
console.log("Is cabbage is in fruits?");
console.log(fruits.includes("cabbbage")); //false
