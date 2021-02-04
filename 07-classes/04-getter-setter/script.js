// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class person {
        constructor(firstname, lastname) {
          this.firstname = firstname;
          this.lastname = lastname;
        }
        // La méthode getter est utilisé pour accéder aux propriétés d'un objet.
        get name() {
          return this.firstname + " " + this.lastname;
        }
        // La méthode setter est utilisée pour changer la valeur d'un objet.
        set name(newname) {
          [this.firstname, this.lastname] = newname.split(" ");
          // La fonction split() permet de scinder une chaîne de caractère
        }
      }
      document.getElementById("run").addEventListener("click", () => {
      let me = new person("Jerem", "Mertens");
      console.log(me.name);
      me.name = "Dries Napoli";
  console.log(me.name);

    });

})();