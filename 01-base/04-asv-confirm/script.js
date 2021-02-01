// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');
})

    // YOUR CODE HERE
    let questions = (() => {
        let age = prompt("How old are you?");
        let gender = prompt("What is your gender?");
        let city = prompt("Where do you live?");
        let confirmation = confirm("You are" + age +  "years old, you'are a" + gender + "and you from" + city);
            if (confirmation === false) {
                questions();
            }
    });


questions();