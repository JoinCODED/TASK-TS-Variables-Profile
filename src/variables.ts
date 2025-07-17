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

let fullName: string;
let yearOfBirth: number;
let hobby: string;
let funFact: string;
let image: string;

fullName = "sarah alkhamees";
yearOfBirth = 1992;
hobby = "swimming";
funFact = "curious";
image =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Ffrance-f.htm&psig=AOvVaw3aJQnHoBy-XK-PBrG0u3Em&ust=1752596548321000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiNlofhvI4DFQAAAAAdAAAAABAE";

let currentYear = 2025;
const your_Age = currentYear - yearOfBirth;
const fullNameString = `My name is ${fullName}`;
const ageString = `I am ${your_Age}`;
const hobbyString = `My hobby is ${hobby}`;
/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let hackerScore = 0;

function incrementBy1() {
  // Increment hackerScore by 1 👇🏻
  hackerScore = hackerScore + 1;
}

function decrementBy1() {
  // decrement hackerScore by 1 👇🏻
  hackerScore = hackerScore - 1;
}

function incrementBy2() {
  hackerScore = hackerScore + 2;
  // Increment hackerScore by 2 👇🏻
}
function decrementBy2() {
  hackerScore = hackerScore - 2;
  // decrement hackerScore by 2 👇🏻
}

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
