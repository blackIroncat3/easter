const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const dateEl = document.getElementById("date");
const date1 = "Date: 2022.04.17.";
async function timer(){
    const date = new Date()
    const date2 = new Date("2021.04.04. 00:00")
    const ss = (date2-date)/1000;
    const days = Math.floor(ss / 3600 / 24);
    const hours = Math.floor(ss/3600)%24;
    const mins = Math.floor(ss/60)%60;
    const sec = Math.floor(ss%60)
    daysEl.innerHTML= formaTime(days);
    hoursEl.innerHTML= formaTime(hours);
    minsEl.innerHTML= formaTime(mins);
    secondsEl.innerHTML= formaTime(sec);
    dateEl.innerHTML=date1
}
function formaTime(time){
    return time < 10 ? (`0${time}`) : time;
}
timer()
setInterval(timer, 1000)
