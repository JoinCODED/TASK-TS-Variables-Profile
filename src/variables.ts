/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

let fullName: string = "Sheikha Alenezi";
let yearOfBirth: number = 1998;
let hobby: string = "sleep";
let funFact: string = "I can speak three languages.";
let image: string = "https://example.com/my-image.jpg";

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it: "My name is {fullName}""
 * 2. ageString           -> assign it: "I am {YOUR_AGE}"", and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it: "My hobby is {YOUR_HOBBY}""
 */

let currentYear: number = new Date().getFullYear();
let age: number = currentYear - yearOfBirth;
let fullNameString: string = `My name is ${fullName}`;
let ageString: string = `I am ${age}`;
let hobbyString: string = `My hobby is ${hobby}`;

console.log(fullNameString);
console.log(ageString);
console.log(hobbyString);
/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let hackerScore = 0;

function incrementBy1() {
  // Increment hackerScore by 1 👇🏻
  hackerScore += 1;
}
incrementBy1();
console.log(hackerScore);

function decrementBy1() {
  // decrement hackerScore by 1 👇🏻
  hackerScore -= 1;
}

decrementBy1();
console.log(hackerScore);

function incrementBy2() {
  // Increment hackerScore by 2 👇🏻
  hackerScore += 2;
}
incrementBy2();
console.log(hackerScore);

function decrementBy2() {
  // decrement hackerScore by 2 👇🏻
  hackerScore -= 2;
}

decrementBy2();
console.log(hackerScore);

// Ignore this part (:
export {
  fullName,
  yearOfBirth,
  hobby,
  funFact,
  image,
  fullNameString,
  ageString,
  hobbyString,
  incrementBy1,
  incrementBy2,
  decrementBy1,
  decrementBy2,
};
