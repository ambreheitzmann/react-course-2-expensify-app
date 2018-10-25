const square = function (x) {
    return x * x;
};
/*
const squareArrow = (x) => {
    return x * x;
};*/

//const squareArrow = (x) => x * x;
//console.log(squareArrow(4));

const getFirstName = (fullName) => fullName.split(' ')[0];

let myFullName = 'Ambre Heitzmann';
//console.log(getFirstName(myFullName));

const add = function (a, b) {
    return a + b;
}

const multiplier = {
    arrayNumbers: [2, 3, 4],
    multiplyBy: 10,
    multiply() {
        return this.arrayNumbers.map((number) => number * this.multiplyBy)
        return this.arrayNumbers.forEach((number) => console.log(number * this.multiplyBy))

    },
};

console.log(multiplier.multiply())


