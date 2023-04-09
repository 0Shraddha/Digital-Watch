function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var period = "AM";

    //12-hr clock format
    if(hours >= 12){
        period = "PM";
    }
    //add the 0 for the values lower than 10
    if(hours < 10){
        hours ="0" + hours;
    }
    if(minutes < 10){
        minutes ="0" + minutes;
    }
    if(seconds < 10){
        seconds ="0" + seconds;
    }
    hours = hours > 12 ? hours % 12 : hours;

document.querySelector("#hours").innerHTML = hours;
document.querySelector("#minutes").innerHTML = minutes;
document.querySelector("#seconds").innerHTML = seconds;
document.querySelector("#period").innerHTML = period;
}
var updateClock = setInterval(clock, 1000);


//GET date in js

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday: "long"});
const monthName = today.toLocaleString("default", {month: "short"});

document.querySelector("#month").innerHTML = monthName;
document.querySelector("#dayName").innerHTML = dayName;
document.querySelector("#dayNumber").innerHTML = dayNumber;
document.querySelector("#year").innerHTML = year;