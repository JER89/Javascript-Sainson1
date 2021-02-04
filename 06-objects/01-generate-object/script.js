// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let properties = {
            lastName : "Mertens",
            firstName : "Dries",
            age : "31 old",
            city : "La Louvière",
            country : "Belgium"
        }
        console.log("Hi! I'm " + properties.firstName + " " + properties.lastName + ". I'm " + properties.age + ". And I'm living " + properties.city + ", in " + properties.country + ".");
    });
})();