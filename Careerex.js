alert("Welcome to Careerex!");

/*Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.*/
var name = "Charity Okechukwu";
var age = 33;
var nationality = "Nigerian";

console.log("Hello, my name is " + name + ". I am " + age + " years old and I am a Nigerian.");

/* Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps. */
var quote = "If the world was ending, I'd wanna be next to you.If the party was over and our time on Earth was through.I'd wanna hold you just for a while and die with a smile.If the world was ending, I'd wanna be next to you";
var upperQuote = quote.toUpperCase();
var lowerQuote = quote.toLowerCase();
console.log("Uppercase: " + upperQuote);
console.log("Lowercase: " + lowerQuote);

/*Take a word and rearrange it in reverse order, then log the reversed word.*/
var word = "Careerex";
var reversedWord = word.split("").reverse().join("");
console.log("Reversed word: " + reversedWord);

/*Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.*/
var mangoJuice = 10.99;
var nutriChoco = 5.49;
var waterMelon = 7.25;
var totalPrice = mangoJuice + nutriChoco + waterMelon;
console.log("The total price of the juice is: $" + totalPrice.toFixed(2));

/*Find the average of 5 test scores stored in variables. Display the average with a message.*/
let testScore1 = 85;
let testScore2 = 90;
let testScore3 = 78;
let testScore4 = 88;
let testScore5 = 92;
let averageScore = (testScore1 + testScore2 + testScore3 + testScore4 + testScore5) / 5;
console.log("The average test score is: " + averageScore.toFixed(2));


/*Create an array of your 5 favorite foods. Display the first and last items in the array.*/
let favoriteFoods = ["Pizza", "Sushi", "Pasta", "Ice Cream", "Burgers"];
console.log("First favorite food: " + favoriteFoods[0]);

/*Add two more food items to the list: one at the beginning and one at the end. Display the new list.*/
favoriteFoods.unshift("Salad");
favoriteFoods.push("Tacos"); 
console.log("Updated favorite foods: " + favoriteFoods);

/*8.Create three arrays:



8.jssOne

9.jssTwo

10.jssThree



Each array must contain 10 student names as string values.*/
let jssOne = ["John", "Mary", "Peter", "Sarah", "David", "Emma", "Michael", "Sophia", "James", "Olivia"];
let jssTwo = ["Liam", "Ava", "Noah", "Isabella", "Lucas", "Mia", "Ethan", "Charlotte", "Mason", "Amelia"];  
let jssThree = ["Alexander", "Harper", "Benjamin", "Evelyn", "Daniel", "Abigail", "Matthew", "Ella", "Henry", "Scarlett"];

console.log("JSS One: " + jssOne);
console.log("JSS Two: " + jssTwo);  
console.log("JSS Three: " + jssThree);
