
function output(message) {
    let newElement = document.createElement('div');
    newElement.innerHTML = message;
    document.getElementById("output").appendChild(newElement);
}

output('begin.');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Developer extends Person {
    // Use Rest parameters
    // TODO: Explain
    constructor(name, age, ...languages) {
        // Call to Super
        // TODO: Explain
        super(name, age);               
        // The spread operator
        // TODO: Explain
        this.languages = [...languages];
    }
    printLanguages() {
        // The for..of loop
        // TODO: Explain
        for(let lang of this.languages) {
            console.log(lang);
        }
    }
}

// Block scoping
// TODO: Explain
let me = new Developer("Phil", 44, "ES5", "ES6");

output('My name is '+ me.name + '. I am ' + me.age + ' years old.');

output('end.');

