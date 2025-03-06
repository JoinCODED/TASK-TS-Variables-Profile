"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.hobbyString = exports.ageString = exports.fullNameString = exports.image = exports.funFact = exports.hobby = exports.yearOfBirth = exports.fullName = void 0;
exports.incrementBy1 = incrementBy1;
exports.incrementBy2 = incrementBy2;
exports.decrementBy1 = decrementBy1;
exports.decrementBy2 = decrementBy2;
var fullName = "Zainab AlSaffar";
exports.fullName = fullName;
var yearOfBirth = 2003;
exports.yearOfBirth = yearOfBirth;
var hobby = "Photography";
exports.hobby = hobby;
var funFact = "I once went to the cinema 10 times in one month!";
exports.funFact = funFact;
var image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.capitalccg.ac.uk%2Fnews%2Fhow-to-become-a-software-engineer&psig=AOvVaw3CYe97skUvKRnh3wYpzL6J&ust=1741337398354000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiw1L2J9YsDFQAAAAAdAAAAABAE";
exports.image = image;
/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it: "My name is {fullName}""
 * 2. ageString           -> assign it: "I am {YOUR_AGE}"", and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it: "My hobby is {YOUR_HOBBY}""
 */
var fullNameString = "My name is ${fullName}";
exports.fullNameString = fullNameString;
var ageString = "I am ${2025 - yearOfBirth}";
exports.ageString = ageString;
var hobbyString = "My hobby is ${hobby}";
exports.hobbyString = hobbyString;
/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */
var hackerScore = 0;
function incrementBy1() {
    // Increment hackerScore by 1 👇🏻
    hackerScore = hackerScore + 1;
}
function decrementBy1() {
    // decrement hackerScore by 1 👇🏻
    hackerScore = hackerScore - 1;
}
function incrementBy2() {
    // Increment hackerScore by 2 👇🏻
    hackerScore = hackerScore + 2;
}
function decrementBy2() {
    // decrement hackerScore by 2 👇🏻
    hackerScore = hackerScore - 2;
}
