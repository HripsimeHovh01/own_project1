"use script"

let countOfCountry;

function init() {
 countOfCountry = +prompt("How many countries have you visited?");

while (countOfCountry == "" || countOfCountry == null || isNaN(countOfCountry)) {
    countOfCountry = +prompt("How many countries have you visited?");
}

}
init()
const obj = {
    count: countOfCountry,
    continent: {},
    ocean: {},
    religion: [],
    status: null,
    private: false
};
  function rememberAndCreateUserCountry() {
    for (let i = 0; i < 1; i++) {
        const firstCountry = prompt("Which country did you visit first?");
        const rateCountry = +prompt(`How would you rate your visit to ${firstCountry}?`);
        const likeCountry = prompt("Which country do you like?");
    
    if (firstCountry != null && likeCountry != null && rateCountry != null && firstCountry != "" && likeCountry != "" && rateCountry != "" && firstCountry.length < 30) {
        obj.continent[firstCountry] = rateCountry;
    console.log("Done");
        } else {
            console.log("Canceled");
            i--;
        }
    console.log(obj);
    }
  }
function detectUserPersonalLevel() {
    if (obj.count < 2){
        obj.status = "You aren't travel lover";
        } else if 
            (obj.count >= 10) {
            obj.status = "You are travel lover"
            } else {
                console.log("It happened problem ");
            }  
}


function checkObjPrivateStatus(state) {
    state ? console.log("Sorry but obj is not visible"): console.log(obj);
    
}
rememberAndCreateUserCountry();
detectUserPersonalLevel();
checkObjPrivateStatus(obj.private);
