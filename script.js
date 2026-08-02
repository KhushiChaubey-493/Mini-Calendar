const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = [
    "Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday","Saturday"
];

const allMonths = [
    "January","February","March","April",
    "May","June","July","August",
    "September","October","November","December"
];

date.textContent = String(today.getDate()).padStart(2,"0");
day.textContent = weekDays[today.getDay()];
month.textContent = allMonths[today.getMonth()];
year.textContent = today.getFullYear();

document.querySelector(".calendar").animate(
[
    {opacity:0,transform:"scale(.7) rotate(-8deg)"},
    {opacity:1,transform:"scale(1) rotate(0)"}
],
{
    duration:800,
    easing:"ease-out"
});