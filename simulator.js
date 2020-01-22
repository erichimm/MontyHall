const NUM_TRIALS = 10000;

const Prizes = Object.freeze({
    CAR: Symbol('car'),
    GOAT: Symbol('goat')
});

let switcWin = 0;
let stayWin = 0;

/**
 * Simulates the Monty Hall problem
 * @param {Number} iterations The number of trials to run
 */
function simulateMontyHall(iterations) {
    let doors = new Array(3).fill(Prizes.GOAT);
    doors[getRandInt(3)] = Prizes.CAR;
    
    let choice = getRandInt(3);
    let switchOption = getOption(doors, choice);
    console.log(doors);
    console.log(`Choice: ${choice}\nSwitch: ${switchOption}`);
    
}

/**
 * Generate a random integer between 0 and max, exclusive.
 * @param {Number} max The upper bound of integers
 * @returns {Number} A random integer
 */
function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Offer a prize door to switch to
 * @param {Array.<Prizes>} doors A list of prize doors
 * @param {Number} choice The chosen door
 * @returns {Number} The index of an alternate door
 */
function getOption(doors, choice) {
    // Create a list of each door's index
    let indexList = doors.map((doors, i) => i);

    // Filter out the chosen door and the door with the car
    let options = indexList.filter(index => {
         return (doors[index] !== Prizes.CAR) && (index !== choice);
    });
    
    // Randomly choose one among the remaining doors
    return options[getRandInt(options.length)];
}

simulateMontyHall(NUM_TRIALS);