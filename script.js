let fullOperation = '';
let history = []

function addNumber(number) {
    let op = fullOperation.split('');

    if (op.includes('+') && number.toString() === '+') return;
    if (op.includes('-') && number.toString() === '-') return;
    if (op.includes('/') && number.toString() === '/') return;
    if (op.includes('^') && number.toString() === '^') return;

    if (number === "=") {
        calculate();
        return;
    }

    if (number === "clear") {
        clear();
        return;
    }

    fullOperation += number.toString();
    showNumber();
}

function calculate() {
    let result;
    let numbers;
    
    if (fullOperation.includes('+')) {
        numbers = fullOperation.split('+');
        result = Number(numbers[0]) + Number(numbers[1]);
    } else if (fullOperation.includes('-')) {
        numbers = fullOperation.split('-');
        result = Number(numbers[0]) - Number(numbers[1]);
    } else if (fullOperation.includes('/')) {
        numbers = fullOperation.split('/');
        result = Number(numbers[0]) / Number(numbers[1]);
    } else if (fullOperation.includes('^')) {
        numbers = fullOperation.split('^');
        result = Number(numbers[0]) ** Number(numbers[1]);
    } else if (fullOperation.includes('*')) {
        numbers = fullOperation.split('*');
        result = Number(numbers[0]) * Number(numbers[1]);
    } else {
        console.log("Error");
        return;
    }

    let fullOperationTmp = fullOperation + "=" + result.toString();
    history.push(fullOperationTmp);
    updateHistory();
    fullOperation = result.toString();
    showNumber();
}

function showNumber() {
    document.getElementById('operation').innerHTML = fullOperation;
}

function clear() {
    fullOperation = "";
    document.getElementById('operation').innerHTML = "";
}

function updateHistory() {
    let historyCon = document.getElementById("history");
    historyCon.innerHTML = "";
    history.slice(-3).forEach((op) => {
        let p = document.createElement("p");
        p.innerText = op;
        historyCon.appendChild(p);
    });
}

function clearHistory() {
    history = [];
    document.getElementById("history").innerHTML = "";
}
