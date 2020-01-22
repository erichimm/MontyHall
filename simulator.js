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
    
    console.log(doors);
}

// Returns an int between 0 and max, exclusive.
// getRandInt(5) -> 0, 1, 2, 3, 4
function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

simulateMontyHall(NUM_TRIALS);