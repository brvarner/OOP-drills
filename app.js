// // Step 1: Object Literals
// let person1 = {
//   name: "Richard",

//   sayHello: function () {
//     console.log(`Hello! My name is ${this.name}!`);
//   },
// };

// let person2 = {
//   name: "Resha",

//   sayHello: function () {
//     console.log(`Hello! My name is ${this.name}!`);
//   },
// };

// let person3 = {
//   name: "Mel",

//   sayHello: function () {
//     console.log(`Hello! My name is ${this.name}!`);
//   },
// };

// let person4 = {
//   name: "Lovelight",

//   sayHello: function () {
//     console.log(`Hello! My name is ${this.name}!`);
//   },
// };

// let person5 = {
//   name: "Sofi",

//   sayHello: function () {
//     console.log(`Hello! My name is ${this.name}!`);
//   },
// };

// // Step 2: Calling Methods
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// Step 3: Constructor Function and Prototypes
// function Person(name, city, age){
//     this.name = name;
//     this.city = city;
//     this.age = age;
// };

// Person.prototype.sayHello = function(){
//     console.log(`Hey! My name is ${this.name}. I am ${this.age} years old, and live in ${this.city}.`)
// }


// let p1 = new Person('Richard', 'Gardendale', 25);
// let p2 = new Person('Resha', 'Waynesville', 25);
// let p3 = new Person('Mel', 'Adamsville', 28);
// let p4 = new Person('Lovelight', 'Birmingham', 32);
// let p5 = new Person('Sofi', 'Portland', 25);

// Step 4: Calling Methods
// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

// Step 5: Creating and Calling Class with ES6 Syntax
class Person {
    constructor (name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }

    sayHello(){
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old, and live in ${this.city}.`)
    }
}

let p1 = new Person('Richard', 'Gardendale', 25);
let p2 = new Person('Resha', 'Waynesville', 25);
let p3 = new Person('Mel', 'Adamsville', 28);
let p4 = new Person('Lovelight', 'Birmingham', 32);
let p5 = new Person('Sofi', 'Portland', 25);

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

// Inheritance

// Creating Parent Class, including aboutVehicle method.
class Vehicle {
    constructor (manufacturer, wheelAmount){
        this.manufacturer = manufacturer;
        this.wheelAmount = wheelAmount
    };


    aboutVehicle(){
        console.log(`I am a ${this.vehicleType} made by ${this.manufacturer} with ${this.wheelAmount}`)
    };

};

// Creating child classes with unique properties and methods.
class Truck extends Vehicle {
    constructor (manufacturer, wheelAmount){
        super(manufacturer, wheelAmount);
        this.vehicleType = 'truck';
        this.numberofDoors = 4;
        this.hasTruckBed = true;
        this.canReverse = true;
    };

    aboutVehicle(){
        console.log(`I am a ${this.vehicleType} made by ${this.manufacturer} with ${this.wheelAmount} wheels. I have ${this.numberofDoors ? this.numberofDoors : "no doors"} doors and ${this.hasTruckBed ? "I have a truck bed" : "I don't have a truck bed"}. I ${this.canReverse ? "can reverse" : "can't reverse"}.`)
    };
}

class Sedan extends Vehicle {
    constructor (manufacturer, wheelAmount){
        super(manufacturer, wheelAmount);
        this.vehicleType = 'sedan';
        this.numberofDoors = 4;
        this.hasTruckBed = false;
        this.canReverse = true;
        this.size = 'small';
        this.mpg = 29;
    };

    aboutVehicle(){
        console.log(`I am a ${this.vehicleType} made by ${this.manufacturer} with ${this.wheelAmount} wheels. I have ${this.numberofDoors ? this.numberofDoors : "no doors"} doors and ${this.hasTruckBed ? "I have a truck bed" : "I don't have a truck bed"}. I ${this.canReverse ? "can reverse" : "can't reverse"}. I am ${this.size} and I get ${this.mpg} miles to the gallon.`)
    };
};

class Motorcycle extends Vehicle {
    constructor (manufacturer, wheelAmount){
        super(manufacturer, wheelAmount);
        this.vehicleType = 'motorcycle'
        this.numberofDoors = 0;
        this.hasTruckBed = false;
        this.canReverse = false;
        this.handlebars = true;
        this.steeringWheel = false;
    };

    aboutVehicle(){
        console.log(`I am a ${this.vehicleType} made by ${this.manufacturer} with ${this.wheelAmount} wheels. I have ${this.numberofDoors ? "a door" : "no doors"} and ${this.hasTruckBed ? "I have a truck bed" : "I don't have a truck bed"}. I ${this.canReverse ? "can reverse" : "can't reverse"}. I ${this.handlebars ? "have handlebars" : "don't have handlebars"} and I ${this.steeringWheel ? "have a steering wheel" : "don't have a steering wheel"}.`)
    };
};

// Instantiation
let Tundra = new Truck('Toyota', 4);
let Passat = new Sedan('Volkswagen', 4);
let Ninja = new Motorcycle('Kawasaki', 2);

// Calling Methods on Instances
Tundra.aboutVehicle();
Passat.aboutVehicle();
Ninja.aboutVehicle();