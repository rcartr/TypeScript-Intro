// No intantiation - one rule of interfaces is that you can't instantiate them. The following would throw an error immediately:
// let a: Animal = new Animal();
// Interfaces aren't used to create objects. They are used to shape objects. One of TypeScript's core principles is that type-checking focuses on the shapre that values have. We impose an interface on and object or class to dictate certain aspects of how that object should be shaped.
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
//              1
var Apples = /** @class */ (function () {
    function Apples() {
    }
    //      2
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log('Apples purchased on', d);
    };
    return Apples;
}());
// 3
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
// 1: Notice that we are "implementing" an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
// 2: We implement the "setTimeOfPurchase" method in the class, and provide a basic implementation by logging the date to the console.
// 3: We then create a new instance of the Apples class and call the setTimeOfPurchase method.
//# sourceMappingURL=04-interfaces.js.map