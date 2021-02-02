// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const date = new Date;

    const options = { weekday: 'long' , year: 'numeric' , month: 'long' , day: 'numeric'};

    document.getElementById("target").innerHTML = date.toLocaleDateString('en-GB', options) +
    " , " + date.getHours()+ "h" + date.getMinutes();
    



})();