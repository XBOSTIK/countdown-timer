document.addEventListener("DOMContentLoaded", () => {
    const   day = document.querySelector('#day'),
        hours = document.querySelector('#hour'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds');

    

    function getTime(){     
        let openDate = new Date("December 31 2022 00:00")
        let newDate = new Date();
        let  waitDate = openDate - newDate;
        console.log(waitDate)
        let   dayWait = Math.floor(waitDate / 1000 / 60 / 60 / 24),
                hoursWait = Math.floor(waitDate / 1000 / 60 / 60) % 24,
                minutesWait = Math.floor(waitDate / 1000 / 60) % 60,
                secondsWait = Math.floor(waitDate / 1000) % 60;


        if(waitDate <= 0) {
            dayWait = dayWait + 30;
            hoursWait = hoursWait + 24;
            minutesWait = minutesWait + 60;
            secondsWait = secondsWait + 60;
        } 

        day.innerHTML = getZero(dayWait);
        hours.innerHTML = getZero(hoursWait);
        minutes.innerHTML = getZero(minutesWait);
        seconds.innerHTML = getZero(secondsWait);
        
    }
    getTime();

    function getZero(number) {
        if(number >= 0 && number < 10) {
            return `0${number}`
        } else {
            return number;
        }
    }

    

    let timerInterval = setInterval(getTime, 1000);
})