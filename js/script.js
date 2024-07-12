"use script"

const countOfCountry = +prompt("How many countries have you visited?")

const obj = {
count: countOfCountry,
continent: {},
ocean: {},
religion: [],
private: false
};

const x = prompt("Which country did you visit first?");
const y = prompt("Which country do you like the most?");
const z = +prompt("How would you rate your last visited country?");
const a = prompt("Which country did you visit first?");
const b = prompt("Which country do you like the most?");
const c = +prompt("How would you rate your last visited country?");

obj.continent[x] = y;
obj.continent[y] = z;
obj.continent[a] = b;
obj.continent[b] =c;

console.log(obj);