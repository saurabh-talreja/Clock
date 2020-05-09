const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date ();
console.log(date);
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

var hourPosition = (hour*30) + minute/12;
var minutePosition = (minute * 6) + second/60 ;
var secondPosition = second * 6;

//Interval is set for 1second, hecnce here moving clock one second ahead
function rotateClock() {
    hourPosition = hourPosition+(3/360);
    minutePosition = minutePosition+(6/60);
    secondPosition = secondPosition+6;
    
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
};

var startClock = setInterval(rotateClock, 1000);