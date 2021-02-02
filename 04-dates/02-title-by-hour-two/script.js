// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();

    let time = currentHour * 60 + currentMinutes;

    // 17h30 = 1050min
    if(time >= 1050) {
        document.getElementById("target").innerHTML = "Good evening";
    } else {
        document.getElementById("target").innerHTML = "Hello";
    }
})();