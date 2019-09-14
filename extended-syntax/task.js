"use strict";

function getResult(a, b, c) {
    let dis = b**2 - 4 * a * c, result;
    if (dis > 0) {
        result = [(-b + Math.sqrt(dis)) / 2 * a, (-b - Math.sqrt(dis)) / 2 * a]
    } else if (dis = 0) {
        result = [-b / 2 * a]
    } else {
        result = [];
    }

    return result;
}

function getAverageMark(marks) {
    if (marks.length > 5) {
        console.log('Колличество оценок больше 5');
        marks = marks.slice(0, 5);
    }

    let marksArr = 0;
    
    for (let mark of marks) {
        marksArr += mark;
    }

    return marksArr / marks.length;
}

function askDrink(name, dateOfBirthday) {
    let userAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
    
    if (userAge >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
}
