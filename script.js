const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const dateEl = document.getElementById("date");
let data = [
    {year: 2022, date: `04.17`},
    {year: 2023, date: `04.09`},
    {year: 2024, date: `03.31`},
    {year: 2025, date: `04.20`},
    {year: 2026, date: `04.20`},
    {year: 2027, date: `03.28`},
    {year: 2028, date: `04.16`},
    {year: 2029, date: `04.01`},
    {year: 2030, date: `04.21`},
];
async function timer(){
    const date = new Date()
    let y = Date.parse(date) > Date.parse(`${new Date().getFullYear()}.${data.find(d=>d.year === new Date().getFullYear()).date} 00:00`) ? new Date().getFullYear()+1 : new Date().getFullYear(); 
    let reader = data.find(d=>d.year === y)
    const date2 = new Date(`${y}.${reader.date}. 00:00`)
    const ss = (date2-date)/1000;
    const days = Math.floor(ss / 3600 / 24);
    const hours = Math.floor(ss/3600)%24;
    const mins = Math.floor(ss/60)%60;
    const sec = Math.floor(ss%60)
    daysEl.innerHTML= formaTime(days);
    hoursEl.innerHTML= formaTime(hours);
    minsEl.innerHTML= formaTime(mins);
    secondsEl.innerHTML= formaTime(sec);
    let date1 = `Date: ${y}.${reader.date}.`;
    dateEl.innerHTML=date1
}
function formaTime(time){
    return time < 10 ? (`0${time}`) : time;
}
timer()
setInterval(timer, 1000)
