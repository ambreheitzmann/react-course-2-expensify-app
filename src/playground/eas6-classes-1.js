// Car 
// make model vin 
// getDescription 

class Person {
    constructor(name = 'Unknown', age = 0) {
        this.name = name;
        this.age = age;

    }
    getGretting() {
        return `Hi ${ this.name }`;
    }
    getAge() {
        return `Age : ${ this.age }`;
    }
    
}

class Student extends Person {
    constructor(name = 'Unknown', age = 0, major) {
        super(name, age);
        this.major = major;

    }
    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name = 'Unknown', age = 0, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting() {
        return `${super.getGretting()} from ${this.homeLocation}`;
    }
}

const me = new Person('Ambre Htz');
const you = new Traveler('Ambre Jr', 19, 'fr');

console.log(me);
console.log(me.getAge());
console.log(you.getGretting());


