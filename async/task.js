let systemTime = '23:10';

function setDailyRhythm(wakeUpTime, bedIime) {
    const goodMorning = () => console.log('Доброе утро!'),
	checkTimeforWakeUp = setAlarm(wakeUpTime, goodMorning);
    const goodNight =  () => console.log('Спокойной ночи!'),
    checkTimeForBed = setAlarm(bedIime, goodNight);
    setInterval(checkTimeforWakeUp, 1000,systemTime);
    setInterval(checkTimeForBed, 1000, systemTime);
} 

function setAlarm(time, callback) {
    return systemTime => {
        if (systemTime === time) callback();
    } 
}

setDailyRhythm('07:00', '23:00');