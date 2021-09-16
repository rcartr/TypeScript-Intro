var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    //methods
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    Person.prototype.sayHelloToFullname = function () {
        console.log("Hello", this.firstName, this.lastName);
    };
    return Person;
}());
//   1      2       3    4
var phil = new Person();
// 1: We declare a variable with our own custom name.
// 2: We declare the type. It's a custom type of Person.
// 3: We use the "new" keyword to instantiate a new instance.
// 4: We call the class with parens. The parens invoke the constructor function.
phil.firstName = "Phil";
phil.lastName = "Donahue";
phil.sayHello(); // Prints "Hello Phil" to the console.
var holler = new Person();
holler.firstName = "Sheriff";
holler.lastName = "Holler";
holler.sayHelloToFullname(); // Prints "Hello Sheriff Holler" to the console
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
// INHERITANCE
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
// Automobile is a child, of subclass, of parent class Vehicle. It inherits the properties of Vehicle while having its own unique properties.
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Volvo';
// Motorcycle is another subclass of Vehicle. We can add unique properties for Motorcycle, while carrying over (or inheriting) the properties of Vehicle.
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
// PRACTICE: create class Animal with 3 properties, then 2 subclasses with a unique property. Instantiate the subclasses and give values to the properties.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
var yogiBear = new Bear();
yogiBear.name = 'Yogi Bear';
yogiBear.canFly = false;
yogiBear.likesPicnicBaskets = true;
var tonyTiger = new Tiger();
tonyTiger.name = 'Tony the Tiger';
tonyTiger.numberOfLegs = 2;
tonyTiger.hasStripes = true;
// PARAMETER Properties
var oldStore = /** @class */ (function () {
    function oldStore(name, city) {
        this.name = name;
        this.city = city;
    }
    return oldStore;
}());
// Same class refactored with TypeScript (commonly used in Angular):
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers'); // Works with both approaches to creating class Store
// ACCESSORS
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 4
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    // 3
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; // This breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
// 1: We create a private property, denoted by the "private" keyword.
// 2: It is common practice to see private properties in classes start with an underscore. This is not required, it's just a common convention.
// 3: We have a method called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as a n argument. There are both number types.
// 4: We have a method called getSalary that returns a string. Inside the method, we perform some low-level business logic of converting the salary number value to a string in the return statement.
//# sourceMappingURL=03-classes.js.map