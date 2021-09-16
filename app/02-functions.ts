function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//1 - Works
addNumbers(1, 2);

//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");

function fullName(firstName: string, lastName: string){
    return firstName + " " + lastName;
}

fullName("George", "Washington");

function login(username: string, password: string) : boolean {
    if("elevenfiftyuser" && "Letmein1234!"){
        return true
    } else {
        return false
    };
};

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne + numTwo;
}

addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");