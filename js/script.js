"use script"

const app = {
    count: 0,
    continent: {},
    ocean: {},
    religion: [],
    status: null,
    private: false,
    init() {
        this.count = +prompt("How many countries have you visited?");

        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt("How many countries have you visited?");
        }

    },
    rememberAndCreateUserCountry() {
        for (let i = 0; i < 1; i++) {
            const firstCountry = prompt("Which country did you visit first?");
            const rateCountry = +prompt(`How would you rate your visit to ${firstCountry}?`);
            const likeCountry = prompt("Which country do you like?");

            if (firstCountry != null && likeCountry != null && rateCountry != null && firstCountry != "" && likeCountry != "" && rateCountry != "" && firstCountry.length < 30) {
                this.continent[firstCountry] = rateCountry;
                console.log("Done");
            } else {
                console.log("Canceled");
                i--;
            }
            console.log(obj);
        }
    },
    detectUserPersonalLevel() {
        if (this.count < 2) {
            this.status = "You aren't travel lover";
        } else if
            (this.count >= 10) {
            this.status = "You are travel lover"
        } else {
            console.log("It happened problem ");
        }
    },
    checkObjPrivateStatus(state) {
        state ? console.log("Sorry but obj is not visible") : console.log(obj);

    },
    userReligion() {
        for (let i = 0; i < 2; i++) {
            this.religion.push(prompt(`What religion do you belong to ${i + 1}?`))

        }
    },
    startApp() {
        this.init()

        this.rememberAndCreateUserCountry();
        this.userReligion();
        this.detectUserPersonalLevel();
        this.checkObjPrivateStatus(this.private);
    }
};
app.startApp();

