//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    // create a person class
    class person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    // Create a method (sayHello)
        sayHello() {
            return "Hello, " + this.firstname + " " + this.lastname;
        }
    }
    // Instruction new person
        let J = new person("Jérémy", "Mertens");

        console.log(J.sayHello());
    
})();