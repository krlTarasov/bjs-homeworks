function getSound(animal) {
    if (!animal) {
        return null;
    }

    let sound = animal.sound;
    return sound;
}

let lion = {
    sound: 'rrr'
}

console.log(getSound(lion));

function getAverageMark(marks) {
    let sum = 0;
    for (const i of marks) {
        sum += marks[i];
    }

    average = sum / marks.length;

    let roundedAverage = Math.round(average);

    return roundedAverage;
}

console.log(getAverageMark([3,3,3,3,4,5,6,7,8,9,]));

function isMajoruty(birthDay) {
    console.log(birthDay)
    let now = +(new Date);
    birthDay = +birthDay;
    let diff = now - birthDay;
    let age = diff / 31622400030;
    console.log(age);
    return (age >= 18);
}

console.log(isMajoruty(new Date(2000,8,20)));