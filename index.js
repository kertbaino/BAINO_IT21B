// Flower class definition
class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    }

    bloom() {
        console.log(`The ${this.name} blooms in ${this.bloomSeason}.`);
    }

    fragrance() {
        if (this.isFragrant) {
            console.log(`The ${this.name} is fragrant.`);
        } else {
            console.log(`The ${this.name} is not fragrant.`);
        }
    }

    colorDisplay() {
        console.log(`The ${this.name} has a beautiful ${this.color} color.`);
    }
}

// Creating an object of the Flower class
const rose = new Flower("Rose", "red", "Spring", true);

// Call the methods on the Flower instance
rose.bloom();
rose.fragrance();
rose.colorDisplay();
