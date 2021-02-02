// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const dobDay = document.getElementById("dob-day").value;
        const dobMonth = document.getElementById("dob-month").value;
        const dobYear = document.getElementById("dob-year").value;
        const formatDob = dobMonth + "/" + dobDay + "/" +dobYear;
    
        const dateToday = new Date();
        const dateOfBirth = new Date(formatDob);
    
    
        const diff = dateToday.valueOf() - dateOfBirth.valueOf();
        const age = Math.floor(diff/ 1000 / 60 / 60 / 24 / 365);
        
        alert(age);
    })
})();