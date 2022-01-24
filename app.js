currOperation = document.querySelector(".currOperation")
display = document.querySelector(".display");
resultDisplay = document.querySelector(".result");

let numBtns = document.querySelectorAll(".greyBtn");

let num1 = "";
let num2 = "";

let num1Clicked = false;
let num2Clicked = false;
let decimalClicked = false;

numBtns.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (equalsClicked) {
            result = "";
            resultDisplay.textContent = result;
            currOperation.textContent = "";
            equalsClicked = false;
        }
        if (!operatorClicked && num1.length < 15) {
            num1 = num1.concat(button.dataset.key);
            display.textContent = num1;
            num1Clicked = true;
        } else if (operatorClicked && num2.length < 15) {
            num2 = num2.concat(button.dataset.key);
            display.textContent = num2;
            num2Clicked = true;
        }
    })
})

operatorBtn = document.querySelectorAll(".orangeBtn");
let operatorClicked;

operatorBtn.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (num1Clicked) {
            operation = button.dataset.key;
            operatorClicked = true;
            operatorChar = button.textContent;
            emptyDisplay();
            updateCurrOperation();
            num1Clicked = false;
        }

    })
})

let result;

let operation = "";
let operatorChar = "";
let equalsClicked = false;

let equals = document.querySelector(".greenBtn");


equals.addEventListener("click", function (e) {
    if (num2 !== "") {
        if (num1.charAt(0) === ".") {
            num1 = "0" + num1;
        }
        if (num2.charAt(0) === ".") {
            num2 = "0" + num2;
        }
        if (operation === "add") {
            result = parseFloat(num1) + parseFloat(num2);
            resultDisplay.textContent = result;
            equalsClicked = true;
            operatorClicked = false;
            updateCurrOperation();
            emptyDisplay();
        } else if (operation === "subtract") {
            console.log(num1);
            console.log(num2);
            result = parseFloat(num1) - parseFloat(num2);
            resultDisplay.textContent = result;
            equalsClicked = true;
            operatorClicked = false;
            updateCurrOperation();
            emptyDisplay();
        } else if (operation === "multiply") {
            result = parseFloat(num1) * parseFloat(num2);
            resultDisplay.textContent = result;
            equalsClicked = true;
            operatorClicked = false;
            updateCurrOperation();
            emptyDisplay();
        } else if (operation === "divide") {
            result = parseInt(num1) / parseInt(num2);
            resultDisplay.textContent = result;
            equalsClicked = true;
            operatorClicked = false;
            updateCurrOperation();
            emptyDisplay();
        }
    }
    num2Clicked = false;
});

function emptyDisplay() {
    if (equalsClicked) {
        display.textContent = "";
        num1 = "";
        num2 = "";
    } else {
        display.textContent = "";
    }

}

function updateCurrOperation() {
    if (!equalsClicked) {
        currOperation.textContent = `${num1} ${operatorChar}`;
    } else {
        currOperation.textContent = `${num1} ${operatorChar} ${num2} =`;
    }
}

allClear = document.querySelector(".allClear");

allClear.addEventListener("click", function (e) {
    display.textContent = "";
    resultDisplay.textContent = "";
    currOperation.textContent = "";
    num1 = "";
    num2 = "";
    num1Clicked = false;
    num2Clicked = false;
    operatorClicked = false;
    equalsClicked = false;
});

backspace = document.querySelector(".backspace");

backspace.addEventListener("click", function (e) {
    if (num1Clicked && !operatorClicked && !equalsClicked) {
        num1 = num1.slice(0, -1);
        display.textContent = num1;

    } else if (operatorClicked && num2Clicked && !equalsClicked) {
        num2 = num2.slice(0, -1);
        display.textContent = num2;
    }
});