var chinese2digit = (chineseDigit) => {
    let stack = [];
    let separateUnits = {
        '萬': 10000,
        '億': 10000,
    };
    let units = {
        '仟': 1000,
        '千': 1000,
        '百': 100,
        '十': 10,
    };
    let numbers = {
        '一': 1,
        '兩': 2,
        '二': 2,
        '三': 3,
        '四': 4,
        '五': 5,
        '六': 6,
        '七': 7,
        '八': 8,
        '九': 9,
    };
    let total = 0;
    for (let i = 0; i < chineseDigit.length; i++) {
        let current = chineseDigit[i];
        if (current in units) {
            total += units[current] * (stack.pop() || 1);
        } else if (current in separateUnits) {
            total *= separateUnits[current];
            total += separateUnits[current] * (stack.pop() || 0);
        } else {
            if (stack.length > 0) {
                stack.push(`${stack.pop()}${current}`);
            } else {
                stack.push(numbers[current] || current);
            }
        }
    }
    if (total) {
        if (stack.length > 0) {
            let offset = String(total).match(/0*$/)[0].length - stack.length;
            total += Number(stack.join('')) * Math.pow(10, offset);
        }
        return total;
    } else {
        return Number(chineseDigit);
    }
}

module.exports = chinese2digit;