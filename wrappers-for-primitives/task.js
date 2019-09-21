"use strict" 

function calculatePayments(interestRate, initialPayment, amount, term) {
    for (let i = 0; i < arguments.length; i++) {
        let argName;
        switch(i) {
            case 0: argName = 'interestRate';
            break;
            case 1: argName = 'initialPayment';
            break;
            case 2: argName = 'amount';
            break;
            case 3: argName = 'term';
            break;
        }
        if (!(typeof arguments[i] == 'number' || typeof arguments[i] == 'string')) {
            return `Параметр ${argName} содержит неправильное значение ${arguments[i]}`;
        }
        if(isNaN(Number(arguments[i]))) {
            return `Параметр ${argName} содержит неправильное значение ${arguments[i]}`;
        }
    }

    interestRate = Number(interestRate);
    initialPayment = Number(initialPayment);
    amount = Number(amount);
    term = Number(term);

    let debt = amount - initialPayment, monthlyRate = interestRate / 1200;
    let monthlyFee = debt*(monthlyRate+monthlyRate/(((1+monthlyRate)**term)-1))

    return monthlyFee * term;
}

console.log(calculatePayments(10, 0 ,20000, 24));

function greet(name = 'Аноним' ) {
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}

console.log(greet())