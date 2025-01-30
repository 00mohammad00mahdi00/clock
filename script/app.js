
const hoursElm = document.querySelector(".hours")
const minutesElm = document.querySelector(".minutes")
const secondsElm = document.querySelector(".seconds")

const hoursClockArrow = document.querySelector(".hoursClockArrow")
const secondsClockArrow = document.querySelector(".secondsClockArrow")
const minutesClockArrow = document.querySelector(".minutesClockArrow")

// function calculate clock and add transfor rotate 

function clock(hours, minutes, seconds) {
    let hoursDate;
    let minutesDate;
    let secondsDate;

    let date;
    setInterval(() => {

        date = new Date()

        hoursDate = date.getHours()
        minutesDate = date.getMinutes()
        secondsDate = date.getSeconds()

        let calculateHours = (hoursDate / 12) * 360
        let calculateMinutes = (minutesDate / 60) * 360
        let calculateSecondes = (secondsDate / 60) * 360

        hours.style.transform = `rotate(${calculateHours}deg)`
        minutes.style.transform = `rotate(${calculateMinutes}deg)`
        seconds.style.transform = `rotate(${calculateSecondes}deg)`
    },1000)
}

clock(hoursElm, minutesElm, secondsElm)

clock(hoursClockArrow, minutesClockArrow, secondsClockArrow)