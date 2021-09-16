function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works
addNumbers(1, 2);
//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
fullName("George", "Washington");
function login(username, password) {
    if ("elevenfiftyuser" && "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");
//# sourceMappingURL=02-functions.js.map