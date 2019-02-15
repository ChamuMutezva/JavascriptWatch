const secHand  = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60 ) * 360) + 90;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    secHand.style.transform = `rotate(${secondDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
console.log(secondDegrees);
}

setInterval(setDate, 1000);