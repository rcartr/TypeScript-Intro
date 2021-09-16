class Person {
    //properties: types
    firstName: string;
    lastName: string;
    //methods
    sayHello(){
        console.log("Hello", this.firstName)
    }
    sayHelloToFullname(){
        console.log("Hello", this.firstName, this.lastName)
    }
}

//   1      2       3    4
let phil: Person = new Person();
// 1: We declare a variable with our own custom name.
// 2: We declare the type. It's a custom type of Person.
// 3: We use the "new" keyword to instantiate a new instance.
// 4: We call the class with parens. The parens invoke the constructor function.

phil.firstName = "Phil";
phil.lastName = "Donahue";
phil.sayHello(); // Prints "Hello Phil" to the console.

let holler: Person = new Person();
holler.firstName = "Sheriff";
holler.lastName = "Holler";
holler.sayHelloToFullname(); // Prints "Hello Sheriff Holler" to the console

class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');

// INHERITANCE
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

// Automobile is a child, of subclass, of parent class Vehicle. It inherits the properties of Vehicle while having its own unique properties.
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Volvo';

// Motorcycle is another subclass of Vehicle. We can add unique properties for Motorcycle, while carrying over (or inheriting) the properties of Vehicle.
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

// PRACTICE: create class Animal with 3 properties, then 2 subclasses with a unique property. Instantiate the subclasses and give values to the properties.
class Animal {
    name: string;
    numberOfLegs: number;
    canFly?: boolean;
}

class Bear extends Animal {
    likesPicnicBaskets: boolean;
}

class Tiger extends Animal {
    hasStripes: boolean;
}

let yogiBear: Bear = new Bear();
yogiBear.name = 'Yogi Bear';
yogiBear.canFly = false;
yogiBear.likesPicnicBaskets = true;

let tonyTiger: Tiger = new Tiger();
tonyTiger.name = 'Tony the Tiger';
tonyTiger.numberOfLegs = 2;
tonyTiger.hasStripes = true;

// PARAMETER Properties
class oldStore {
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}
// Same class refactored with TypeScript (commonly used in Angular):
class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers'); // Works with both approaches to creating class Store

// ACCESSORS
class Employee extends Person {
    // 1       2
    private _salary: number;
    // 4
    getSalary(): string {
        return this._salary.toString();
    }
    // 3
    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; // This breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);

// 1: We create a private property, denoted by the "private" keyword.
// 2: It is common practice to see private properties in classes start with an underscore. This is not required, it's just a common convention.
// 3: We have a method called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as a n argument. There are both number types.
// 4: We have a method called getSalary that returns a string. Inside the method, we perform some low-level business logic of converting the salary number value to a string in the return statement.