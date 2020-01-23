const NUM_TRIALS = 10000;

const Prizes = Object.freeze({
    CAR: Symbol('car'),
    GOAT: Symbol('goat')
});

let { stayWinChance, switchWinChance } = simulateMontyHall(NUM_TRIALS);

console.log("Chance to win if you stay: " + stayWinChance);
console.log("Chance to win if you switch: " + switchWinChance);

/**
 * Simulates the Monty Hall problem
 * @param {Number} iterations The number of trials to run
 * @returns {Number} The probability to win if you stay
 * @returns {Number} The probability to win if you switch
 */
function simulateMontyHall(iterations) {
    let switchWin = 0;
    let stayWin = 0;
    let totalWins = 0;

    for(let i = 0; i < iterations; i++) {
        let doors = new Array(3).fill(Prizes.GOAT);
        doors[getRandInt(3)] = Prizes.CAR;
        
        let choice = getRandInt(3);
        let option = getOption(doors, choice);

        // Randomly decide to stay with the original choice, or to switch
        if(getRandInt(2)) {
            if(doors[choice] === Prizes.CAR) {
                ++stayWin;
                ++totalWins;
            }
        } else {
            if(doors[option] === Prizes.CAR) {
                ++switchWin;
                ++totalWins;
            }
        }
    }

    return { stayWinChance: stayWin/totalWins, switchWinChance: switchWin/totalWins };
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
    
    // Randomly choose one among the remaining doors to reveal
    let revealed = options[getRandInt(options.length)];

    // Offer up the index of the door to switch to
    return indexList.filter(index => index !== choice && index !== revealed)[0];
}
