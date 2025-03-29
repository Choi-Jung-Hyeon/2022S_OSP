function sum(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++)
        s += numbers[i];
    return s;
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}
function mean2(numbers) {
    let sx = 0;
    let sy = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0)
            sx += numbers[i];
        else
            sy += numbers[i];
    }

    sx /= (numbers.length / 2);
    sy /= (numbers.length / 2);

    return [sx, sy];
}

function med2(numbers) {
    var x = new Array[numbers.length / 2];
    var y = new Array[numbers.length / 2];
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0)
            x.push(numbers[i]);
        else
            y.push(numbers[i]);
    }

    var answer = new Array[x.length];
    for(let i = 0; i < x.length; i++) {
        for(let j = 0; j < x.length; j++) {
            answer.push((x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2);
        }
    }
    
    var answer2 = new Array[x.length]
    for(let i = 0; i < x.length; i++)
        answer2[i] = answer[i];
    let min = answer.reduce((min, curr) => (min < curr ? min : curr), answer[0]);

    let idx = 0;
    for(let i = 0; i < x.length; i++) {
        if(answers[i] === min) {
            idx = i;
            break;
        }
    }

    return [x[idx], y[idx]];
}

function pareto(numbers) {
    var x = new Array[numbers.length / 2];
    var y = new Array[numbers.length / 2];
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0)
            x.push(numbers[i]);
        else
            y.push(numbers[i]);
    }
    for(let i = 0; i < x.length - 1; i++) {
        if(x[i] < x[i + 1]){
            if(y[i] < y[i + 1])
                console.log([x[i], y[i]]);
        }
    }
}

exports.sum = sum;
exports.avg = avg;
exports.max = max;
exports.means2 = mean2;
exports.med2 = med2;
exports.pareto = pareto;