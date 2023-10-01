class Calculator {
    constructor() {
        this.result = document.querySelector('.result span');
        this.currentValue = "";
        this.firstValue = "";
        this.operator = "";
    }

    appendNumber(number) {
        this.currentValue += number;
        this.updateDisplay();
    }

    setOperator(operator) {
        if (this.currentValue !== "") {
            this.firstValue = this.currentValue;
            this.currentValue = "";
            this.operator = operator;
        }
    }

    calculate() {
        if (this.firstValue !== "" && this.currentValue !== "") {
            const num1 = parseFloat(this.firstValue);
            const num2 = parseFloat(this.currentValue);
            switch (this.operator) {
                case "+":
                    this.currentValue = (num1 + num2).toString();
                    break;
                case "-":
                    this.currentValue = (num1 - num2).toString();
                    break;
                case "*":
                    this.currentValue = (num1 * num2).toString();
                    break;
                case "/":
                    if (num2 === 0) {
                        this.currentValue = "Error";
                    } else {
                        this.currentValue = (num1 / num2).toString();
                    }
                    break;
            }
            this.firstValue = "";
            this.operator = "";
            this.updateDisplay();
        }
    }

    clear() {
        this.currentValue = "";
        this.firstValue = "";
        this.operator = "";
        this.updateDisplay();
    }

    updateDisplay() {
        this.result.textContent = this.currentValue;
    }
}

const calculator = new Calculator();

document.querySelector('.buttons').addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('numbers')) {
        calculator.appendNumber(target.value);
    } else if (target.classList.contains('sign')) {
        calculator.setOperator(target.value);
    } else if (target.classList.contains('equals')) {
        calculator.calculate();
    } else if (target.classList.contains('clear')) {
        calculator.clear();
    }
});
