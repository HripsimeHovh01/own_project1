"use script"

const countOfCountry = +prompt("How many countries have you visited?")

const obj = {
    count: countOfCountry,
    continent: {},
    ocean: {},
    religion: [],
    status: null,
    private: false
};

for (let i = 0; i < 1; i++) {
    const firstCountry = prompt("Which country did you visit first?");
    const rateCountry = +prompt(`How would you rate your visit to ${firstCountry}?`);
    const likeCountry = prompt("Which country do you like the most?");

if (firstCountry != null && likeCountry != null && rateCountry != null && firstCountry != "" && likeCountry != "" && rateCountry != "" && firstCountry.length < 30) {
    obj.continent[firstCountry] = rateCountry;
console.log("Done");
    } else {
        console.log("Canceled");
        i--;
    }
console.log(obj);
}

if (obj.count < 2){
obj.status = "You aren't travel lover";
} else if 
    (obj.count >= 10) {
    obj.status = "You are travel lover"
    } else {
        console.log("It happened problem ");
    }