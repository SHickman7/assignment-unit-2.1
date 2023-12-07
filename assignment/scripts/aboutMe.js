// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Stephanie';
console.log( "My first name is",firstName );

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Hickman';
console.log( "My last name is",lastName )

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
//     (remember, you already have variables for this, can you use those?)
//     Console log the value of `fullName`
let fullName = firstName + ' ' + lastName;
console.log( "My full name is", fullName );

// 4 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
//     Console log the value of `luckyNumber`
let luckyNumber = 7;
console.log( "My lucky number is", luckyNumber );

// 5 - Create a variable `introduction` and using the variables from above,
//     give it the value of:
//     'My name is (full name), and I think (lucky number) is a winner!'.
//     Refer back to the videos if you need help with this one.
//     Console log the value of `introduction`
let introduction = 'My name is ' + fullName + ', and I think ' + luckyNumber + ' is a winner!';
console.log( "The value of introduction is:",introduction);

// 6 - Create a variable named `adventurous` and set it to a boolean value (true or false)
//     Console log the value of `adventurous`
let adventurous = false;
console.log( "The value of adventurous is:", adventurous );

// 7 - Create a variable named `food`, and set its value to a string of your favorite food
//     Console log the value of `food`
let food = 'steak fajitas, walleye, buffalo wings, pasta';
console.log( "Some of my favorite foods are: ",food );

// 8 - Create a variable called `pets` and set it to the value of the number of pets you have
//     Console log the value of `pets`
let pets = 0;
console.log( "The number of pets I currently have is:", pets);

// 9 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
console.log( "The number of pets my friend has is:", friendsPets);

// 10 - Add two pets to your `pets` variable
pets += 2;
console.log ( "My updated number of pets is:", pets);

// 11 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 2;
console.log( "The number of allowed pets is:",allowedPets);

// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`

let result;
if (adventurous){
  result = "Adventures are great!"
} else {
  result = "How about we stay home?"
}

console.log ( "Value of result:",result);

// 13 - Create a variable called `diceRoll` and set it to the value of "Try again later.".
//      Create a compound conditional: 
//      if luckyNumber is 2 and adventurous is true,
//      set `diceRoll` to be "Roll the dice!"
//      Console log the value of `diceRoll`

let diceRoll = "Try again later.";
if (luckyNumber === 2 && adventurous){
  diceRoll = "Roll the dice!"
} else {
  diceRoll = "Try again later."
}
console.log( "Value of diceRoll:",diceRoll );
//confirmed console.log in browser displayed "Roll the dice!" when I updated the
  //lucky number variable to be 2 and the adventurous boolean to be true


// 14 - Create a variable called `petStatus`. 
//      Write a conditional that covers the following:
//      if the value of `pets` is less than the value of `allowedPets`,
//      set `petStatus` to the value of "I can have more pets" 
//      if the value of `pets` is equal to the value of `allowedPets`,
//      set `petStatus` to the value of "I have enough pets" 
//      if the value of `pets` is greater than the value of `allowedPets`.
//      set `petStatus` to the value of "Oh no, I have too many pets!"

let petStatus;
if ( pets < allowedPets ){
  petStatus = "I can have more pets"
} else if (pets === allowedPets){
  petStatus = "I have enough pets"
} else {
  petStatus = "Oh no, I have too many pets!"
}

console.log( "The petStatus is:", petStatus);

// STRETCH GOALS:

// 15 - Make a variable called `mostPets` and a conditional that
//      correctly checks the `pets` and `friendsPets` variables, and
//      assigns the highest value to `mostPets`. There's several possibilities --
//      be sure to think through all the scenarios. 
//      console.log `mostPets` after the conditional has run.

let mostPets;

if (pets > friendsPets){
  mostPets = pets;
  console.log('In this scenario, I have the most pets')
} else if (pets < friendsPets){
  mostPets = friendsPets;
  console.log('In this scenario, my friend has the most pets')
} else if (pets === 0 && friendsPets === 0) {
  mostPets = pets;
  console.log('In this scenario, neither my friend or I have any pets')
} else {
  mostPets = pets;
  console.log( 'In this scenario, my friend and I have the same number of pets and that number is > 0')
}

console.log('The person who has the most pets has: ' + mostPets + ' pets.')

//regarding the code above, I probably wouldn't have had to include the 
    //second else if statement, but I thought it would be worth noting if
    //neither of us had any pets.


// 16 - Make a variable called `luckyResult`
//      Write a *switch* statement that sets `luckyResult` to:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
//      console.log `luckyResult` after the conditional has run.


let luckyResult;

switch(luckyNumber){
  case 1:
    luckyResult = "First is the worst";
    break;
  case 2:
    luckyResult = "Second is the best";
    break;
  case 3:
    luckyResult = "Third is the one with the polka dot dress";
    break;
  default:
    luckyResult = "Luck is what happens when preparation meets opportunity";
}

console.log(luckyResult);

//Tested the various scenarios above to confirm the correct luckyResult was console.logged for each




// 17 -- Rewrite question 12 with a `ternary` operator. You'll need to do research!


//from MDN Web Docs:
/*  The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
followed by a colon (:), and finally the expression to execute if the condition is falsy. 
This operator is frequently used as an alternative to an if...else statement. */

//Original Question 12 instructions
// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`

let anotherResult;  //created variable called anotherResult to differentiate from original

anotherResult = adventurous? "Adventures are great!" : "How about we stay home?";
console.log(anotherResult);













// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    firstName: typeof firstName !== 'undefined' ? firstName : undefined,
    lastName: typeof lastName !== 'undefined' ? lastName : undefined,
    fullName: typeof fullName !== 'undefined' ? fullName : undefined,
    luckyNumber: typeof luckyNumber !== 'undefined' ? luckyNumber : undefined,
    introduction: typeof introduction !== 'undefined' ? introduction : undefined,
    adventurous: typeof adventurous !== 'undefined' ? adventurous : undefined,
    food: typeof food !== 'undefined' ? food : undefined,
    pets: typeof pets !== 'undefined' ? pets : undefined,
    friendsPets: typeof friendsPets !== 'undefined' ? friendsPets : undefined,
    allowedPets: typeof allowedPets !== 'undefined' ? allowedPets : undefined,
    result: typeof result !== 'undefined' ? result : undefined,
    diceRoll: typeof diceRoll !== 'undefined' ? diceRoll : undefined,
    petStatus: typeof petStatus !== 'undefined' ? petStatus : undefined,
    mostPets: typeof mostPets !== 'undefined' ? mostPets : undefined,
    luckyResult: typeof luckyResult !== 'undefined' ? luckyResult : undefined,
  };
} catch (e) {
  // Do nothing
}