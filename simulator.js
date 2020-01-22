const NUM_TRIALS = 10000;

const Prizes = Object.freeze({
    CAR: Symbol('car'),
    GOAT: Symbol('goat')
});

let switchWin = 0;
let stayWin = 0;

/**
 * Simulates the Monty Hall problem
 * @param {Number} iterations The number of trials to run
 */
function simulateMontyHall(iterations) {
    let doors = new Array(3).fill(Prizes.GOAT);
    doors[getRandInt(3)] = Prizes.CAR;
    
    let choice = getRandInt(3);
    let option = getOption(doors, choice);
    console.log(doors);
    console.log(`Choice: ${choice}\nSwitch: ${option}`);

    // Randomly decide to stay with the original choice, or to switch
    if(getRandInt(2)) {
        if(doors[choice] === Prizes.CAR)
            ++stayWin;
    } else {
        console.log("switched!");
        
        if(doors[option] === Prizes.CAR)
            ++switchWin;
    }
    console.log(`Stay Win: ${stayWin}\nSwitch Win: ${switchWin}`);
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

simulateMontyHall(NUM_TRIALS);