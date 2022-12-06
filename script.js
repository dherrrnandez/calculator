
let prevDisplay = document.getElementById("display_previous");
let currDisplay = document.getElementById("display_current");
let btnNum = document.querySelectorAll(".btn_num");
let btnOp = document.querySelectorAll(".btn_op");
let btnClear = document.querySelector(".btn_c");
let btnDel = document.querySelector(".btn_del");
let btnEqual = document.querySelector(".btn_equal");

var previousOp = "";
var currentOp = "";
var operation = undefined;

var isResult = false



btnNum.forEach(button => {
    button.addEventListener("click", () => {
        addNumber(button.innerHTML);
        updateDisplay()
    })
})

btnOp.forEach(button => {
    button.addEventListener("click", () => {
        addOperand(button.innerHTML);
        updateDisplay()
    })
})

btnClear.addEventListener("click" , () => {
    clear()
})

btnDel.addEventListener("click", () => {
    currentOp = currentOp.slice(0, -1);
    updateDisplay()
})

btnClear.addEventListener("click" , () => {
    clear()
    updateDisplay()
})

btnEqual.addEventListener("click", () => {
    if (isResult === false) {
        calculate()
        updateDisplay()
    }
    else {
        return
    }
})

clear = () => {
    previousOp = "";
    currentOp = "";
    operation = undefined
}

updateDisplay = () => {
    currDisplay.value = currentOp;
    prevDisplay.value = previousOp;
}

addNumber = (num) => {
    if (num === "." && currentOp.includes(".")) {
        return
    }
    if (num === "0" && currentOp == "") {
        return
    }
    currentOp += num;

    isResult = false;
}

addOperand = (oper) => {
    if (isResult === true) {
        previousOp = currentOp
        currentOp = ""
    }
    currentOp += oper;
    previousOp += currentOp;
    currentOp = ""
    operation = oper
}

calculate = () => {
    var calculation;

    const previous = parseFloat(previousOp);
    const current = parseFloat(currentOp);


    if(isNaN(previous) || isNaN(current)) {
        return
    }


    switch(operation){
        case "+":
            calculation = previous + current;
            break
        case "-":
            calculation = previous - current;
            break
        case "X":
            calculation = previous * current;
            break
        case "/":
            calculation = previous / current;
            break
        default:
            return
    }
    previousOp += currentOp
    currentOp = calculation;

    isResult = true;
}


