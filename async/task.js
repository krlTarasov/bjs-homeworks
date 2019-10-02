
function setDailyRhythm(wakeUpTime, bedIime) {
    let systemTime = '';
    if ((new Date).getHours() < 10) {
        systemTime += '0' + (new Date).getHours();
    } else {
        systemTime += (new Date).getHours();
    }
    if ((new Date).getMinutes() < 10) {
        systemTime += ':0' + (new Date).getMinutes();
    } else {
        systemTime += ':'+ (new Date).getMinutes();
    }
    console.log(systemTime);
    systemTime = '23:00';
    const goodMorning = () => console.log('Доброе утро!'),
	checkTimeforWakeUp = setAlarm(wakeUpTime, goodMorning);
    const goodNight =  () => console.log('Спокойной ночи!'),
    checkTimeForBed = setAlarm(bedIime, goodNight);
    checkTimeForBed(systemTime);
    checkTimeforWakeUp(systemTime);
} 



function setAlarm(time, callback) {
    return systemTime => {
        if (systemTime === time) callback();
    } 
}

setInterval(setDailyRhythm, 1000, '07:00', '23:00');