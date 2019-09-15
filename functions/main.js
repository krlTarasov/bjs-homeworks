function getSolutions(a, b, c) {
    let dis = b**2 - 4 * a * c, result;
    if (dis > 0) {
        let x1 = (-b + Math.sqrt(dis)) / (2 * a), x2 = (-b - Math.sqrt(dis)) / (2 * a);
        result = {roots: [x1 ,x2], D: dis};
    } else if (dis == 0) {
        let x1 = -b / (2 * a);
        result = {roots: x1, D: dis};
    } else {
        result = {D: dis};
    }

    return result;
}

function showSolutionMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    } else if (result.D == 0){
        console.log(`Уравнение имеет один корень. X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`);
    }
}

function getAverageScore(data) {
    function getAverage(array){
        let sum = 0;
        for (const elem of array) {
            sum +=elem;
        }
        return sum / array.length;
    }

    console.log(getAverage([2,3,4]))

    let dataSum = 0, dataLength = 0;

    for (const key in data) {
        data[key] = getAverage(data[key]);
        dataSum += data[key];
        dataLength++;
    }

    data.average = dataSum / dataLength;

    return data;
}

function getPersonData(secretData) {
    function getName(num) {
        if (num == 0) {
            return 'Родриго';
        } else if (num == 1){
            return 'Эмильо';
        }
    }

    return {
        firstName: getName(secretData.aaa),
        lastName: getName(secretData.bbb)
    }
}

console.log(getPersonData({aaa: 0, bbb: 0}));