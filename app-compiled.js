"use strict";

function output(message) {
    var newElement = document.createElement("div");
    newElement.innerHTML = message;
    document.getElementById("output").appendChild(newElement);
}

output("begin.");


/*
class Person {                                          // The 'class' keyword
    constructor(name, age) {                            // Constructors
        this.name = name;
        this.age = age;
    }
}

class Developer extends Person {                        // The 'extends' keyword
    constructor(name, age, ...languages) {              // Rest parameters
        super(name, age);                               // Super calls
        this.languages = [...languages];                // The spread operator
    }
    printLanguages() {                                  // Short method definitions
        for(let lang of this.languages) {               // The for..of loop
            console.log(lang);
        }
    }
}

let me = new Developer("Phil", 44, "ES5", "ES6");     // Block scoping

output('My name is '+ me.name + '. I am ' + me.age + ' years old.');
*/


output("end.");
