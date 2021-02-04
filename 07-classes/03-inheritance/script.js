(() => {
    class Animal {
            constructor(name) {
              this.name = name;
            }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // Create two class Cat and Dog
    // static nomMéthode() { ... } permet de définir une méthode statique d'une classe.
    // Class dog = extension classe animal
    // Utilise le extends mot - clé pour se définir comme une sous - classe .
    class dog extends Animal {
        static greeting = "waf";
    constructor(name) {
        // Le mot-clé super est utilisé afin d'appeler ou d'accéder à des 
        //fonction définies sur l'objet parent(class Animal).
      super(name);
    }
    greet() {
        return super.sayHello();
      }
        
    }
    class cat extends Animal {
        static greeting = "Miouw";
        constructor(name) {
          super(name);
        }
        greet() {
          return super.sayHello();
        }
      }
      document.getElementById("run").addEventListener("click", () =>{
      let doggy = new dog("doggo");
      let catty = new cat("Kitty");
      console.log(doggy.greet() + " " + catty.greet());
    });
})();