// class Weapon {
//     constructor(object) {
//         this.name = object.name;
//         this.attack = object.attack;
//         this.initialDurability = this.durability = object.durability;
//         this.range = object.range;
//     }

//     takeDamage(damage) {
//         this.durability -= damage;
//         if (this.durability < 0) this.durability = 0;
//         console.log(this.durability);
//     }

//     getDamage() {
//         if(this.durability == 0) {
//             return 0;
//         } else if (this.durability / this.initialDurability < 0.3){
//             return this.attack / 2;
//         } else {
//             return this.attack;   
//         }
//     }

//     isBrocken() {
//         if (this.durability > 0) return false;
//         return true;
//     }
// }

// const arm = new Weapon({
//     name: 'Рука',
//     attack: 1,
//     durability: Infinity,
//     range: 1,
// });
  
// arm.takeDamage(20);
// console.log(arm.durability); // Infinity

// const bow = new Weapon({
//     name: 'Лук',
//     attack: 10,
//     durability: 200,
//     range: 3,
// });

// bow.takeDamage(20);
// console.log(bow.durability); // 180

// bow.takeDamage(200);
// console.log(bow.durability); // 0

// console.log(bow.durability); // 0
// console.log(bow.getDamage()); // 0

// console.log(arm.durability); // Infinity
// console.log(arm.getDamage()); // 1

// const sword = new Weapon({
//     name: 'Меч',
//     attack: 25,
//     durability: 500,
//     range: 1,
// });

// const knife = new Weapon({
//     name: 'Нож',
//     attack: 5,
//     durability: 300,
//     range: 1,
// });

// const staff = new Weapon({
//     name: 'Посох',
//     attack: 8,
//     durability: 300,
//     range: 2,
// });

// class advancedWeapon extends Weapon{
//     constructor(object) {
//         super(object);
//        this.versionOf = object.verionOf; 
//     }
// }

// const ax = new advancedWeapon({
//     name: 'Секира',
//     verionOf: 'Меч',
//     attack: 27,
//     durability: 800,
//     range: 1,
// });


// const longBow = new advancedWeapon({
//     name: 'Длинный лук',
//     verionOf: 'Лук',
//     attack: 10,
//     durability: 200,
//     range: 3,
// });

// const staffOfStorm = new advancedWeapon({
//     name: 'Посох Бури',
//     versionOf: 'Посох',
//     attack: 8,
//     durability: 300,
//     range: 2,
// })


//______________________________________________________________________________

class Weapon {

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) this.durability = 0;
    }

    getDamage() {
        if(this.durability == 0) {
            return 0;
        } else if (this.durability / this.initialDurability < 0.3){
            return this.attack / 2;
        } else {
            return this.attack;   
        }
    }

    isBrocken() {
        if (this.durability > 0) return false;
        return true;
    }
}

class Sword extends Weapon{
    constructor() {
        super();
        this.name = 'Меч';
        this.attack =  25;
        this.initialDurability = this.durability =  500;
        this.range = 1;
    }
};

class Knife extends Weapon {
    constructor() {
        super();
        this.name = 'Нож';
        this.attack = 5;
        this.initialDurability = this.durability = 300;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.name = 'Посох';
        this.attack = 8;
        this.initialDurability = this.durability = 800;
        this.range = 2;
    }
}


class Bow extends Weapon {
    constructor() {
        super();
        this.name = 'Лук';
        this.attack = 10;
        this.initialDurability = this.durability = 200;
        this.range = 3;
    }
}


class Arm extends Weapon {
    constructor() {
        super();
        this.name = 'Рука';
        this.attack = 1;
        this.initialDurability = this.durability = Infinity;
        this.range = 1;
    }
}


class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}


class Ax extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.initialDurability = this.durability = 800;
    }
}


class StaffOfStorm extends Staff {
    constructor() {
        super();
        this.name = 'Посох';
        this.attack = 10;
        this.range = 3;
    }
}
let knife = new Sword();
knife.takeDamage(400);
console.log(knife.getDamage(), knife);


// _______________________________________________

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade, subject) {
        if (this[subject] === undefined) this[subject] = [];

        if (grade >= 1 && grade <= 5 && grade % 1 == 0) {
            this[subject].push(grade);
             this.grades.push(grade);
        } else {
            console.log(`Вы попытались поставить оценку ${grade}  по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
        return this[subject].length;
    }

    getAverageBySubject(subject) {
        if (this[subject] === undefined) return 0;
        let sum = 0;
        for (let i = 0; i < this[subject].length; i++) {
            sum += this[subject][i];
        }
        return sum / this[subject].length;
    }

    getTotalAverage() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }

        return sum / this.grades.length;
    }
}
const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75
