
function setDailyRhythm(wakeUpTime, bedIime) {
    setInterval(() => {
        let systemTime = String(new Date).substring(16, 21);
        console.log(systemTime, wakeUpTime, bedIime);
        systemTime = '07:00';
        const goodMorning = () => console.log('Доброе утро!'),
        checkTimeforWakeUp = setAlarm(wakeUpTime, goodMorning);
        const goodNight =  () => console.log('Спокойной ночи!'),
        checkTimeForBed = setAlarm(bedIime, goodNight);
        checkTimeForBed(systemTime);
        checkTimeforWakeUp(systemTime);
    }, 1000)
} 



function setAlarm(time, callback) {
    return systemTime => {
        if (systemTime === time) callback();
    } 
}

setDailyRhythm('07:00', '23:00')

let a = String(new Date).substring(16, 21);
console.log(a);
