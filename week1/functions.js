class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
} 


const person1 = new Person('klown', 'theKol', '03-19-2001');
const person2 = new Person('Jenna', 'theStarr', '08-24-2003');

console.log(`${person1.getFullName()} was born in the year ${person1.getBirthYear()}`);
console.log(`${person2.getFullName()} was born in the year ${person2.getBirthYear()}`);
console.log(person1);