const NUM_TRIALS = 10000;

const Prizes = Object.freeze({
    CAR: Symbol('car'),
    GOAT: Symbol('goat')
});

let switcWin = 0;
let stayWin = 0;

function simulateMontyHall(iterations) {
    let doors = new Array(3).fill(Prizes.GOAT);
    doors[getRandInt(3)] = Prizes.CAR;
    
    let choice = getRandInt(3);
    let switchOption = getOption(doors, choice);
    console.log(doors);
    console.log(`Choice: ${choice}\nSwitch: ${switchOption}`);
    
}

// Returns an int between 0 and max, exclusive.
// getRandInt(5) -> 0, 1, 2, 3, 4
function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

// Offer a door to optionally switch to
function getOption(doors, choice) {
    // Create a list of the index for each door
    let indexList = doors.map((doors, i) => i);

    // Filter out the chosen door and the door with the car
    let options = indexList.filter(index => {
         return (doors[index] !== Prizes.CAR) && (index !== choice);
    });
    
    // Randomly choose one among the remaining doors
    return options[getRandInt(options.length)];
}

simulateMontyHall(NUM_TRIALS);