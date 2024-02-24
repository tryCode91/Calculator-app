var total = document.getElementsByClassName("total")[0];
var displayNumber = document.getElementsByClassName("display-number")[0];

var displayString = "";
var numbers = [];
var currentNumber = [];
var count = [];
var totalAmount = 0;
var lastEnteredOperation = "";

function GetNumber(string) {

    if (displayString == "0") {
        displayString = "";
    }

    displayString += string;

    // current number
    numbers.push(string);
    currentNumber = numbers;

    DisplayNumbers();
}

function DisplayNumbers() {
    
    displayNumber.textContent = displayString;
    
}

// SAVE NUMS
function GetOperation(operation) {
    
    if (operation != '') {
        
        numbers = [];

        switch (operation) {
            case '+':
                GetSum(operation); 
                break;
            case '-':
                GetDifference(operation);
                break;
            case '÷':
                GetQoutient(operation);
                break;
            case '^':
                operation = '&sup2;';
                GetSquared(operation);
                break;
            case 'x':
                GetProduct(operation);
                break;
            case '+/-':
                ChangePlusMinus();
                break;
            case 'b':
                Back();
                break;
            case '=':
                Equal();
                break;
            case 'c':
                Clear();
                break;
            case 'ec':
                ClearEverything();
                break;
            default:
                console.log("nothing was entered" + operation);
                break;
        }
    }

}

function GetSum(operation) {

    var sum = "";
    var currentSum = parseInt(currentNumber.join(""));
   
    if (!isNaN(currentSum)) {
        totalAmount = totalAmount + currentSum;

        sum = totalAmount.toString();
        DisplayResult(operation, sum, currentSum);
        lastEnteredOperation = operation;
    }
    
} 

function GetDifference(operation) {

    var diff = "";
    var currentSum = parseInt(currentNumber.join(""));

    if (!isNaN(currentSum)) {
        
        if (totalAmount == 0) {
            totalAmount = currentSum;
        } else {
            totalAmount = totalAmount - currentSum;
        }
        
        diff = totalAmount.toString();
        DisplayResult(operation, diff, currentSum);
        lastEnteredOperation = operation;
    }
    
}

function GetQoutient(operation) {

    var qout = "";
    var currentSum = parseInt(currentNumber.join(""));

    if (!isNaN(currentSum)) {
        if (totalAmount == 0) {
            totalAmount = currentSum;
        } else {
            totalAmount = totalAmount / currentSum;
        }

        qout = totalAmount.toString();
        DisplayResult(operation, qout, currentSum);
        lastEnteredOperation = operation;

    }
    
}

function GetSquared(operation) {

    var sqr = "";
    var currentSum = parseInt(currentNumber.join(""));
    
    if (!isNaN(currentSum)) {
    
        totalAmount = Math.pow(currentSum, 2);
       
        sqr = totalAmount.toString();
        DisplayResult(operation, sqr, currentSum);
        lastEnteredOperation = operation;
    }

}

function GetProduct(operation) {

    var prod = "";
    var currentSum = parseInt(currentNumber.join(""));
    
    if (!isNaN(currentSum)) {
        if (totalAmount == 0) {
            totalAmount = currentSum;
        } else {
            totalAmount = totalAmount * currentSum;
        }

        prod = totalAmount.toString();
        DisplayResult(operation, prod, currentSum);
        lastEnteredOperation = operation;

    }

}

function ChangePlusMinus() {

    if (lastEnteredOperation == '+') {
        lastEnteredOperation = '-';
    } else if (lastEnteredOperation == '-') {
        lastEnteredOperation = '+';
    }

}

function DisplayResult(operation, calculation, currentSum) {

    // Display number
    displayNumber.innerHTML = calculation;

    displayString = "";

    if (lastEnteredOperation = '&sup2;') {
        calculation = currentSum.toString();
    }
    
    total.innerHTML = ReplaceOperationSign(operation, calculation);

}

function ReplaceOperationSign(operation, stringWithOperator) {

    var lastCharacter = stringWithOperator[stringWithOperator.length - 1];
    
    // if ts NOT EQUAL

    if (operation != '=') {

        if (lastCharacter != operation) {

            stringWithOperator += operation;

        }

    }

    return stringWithOperator;
}

function Equal() {
    console.log("lastEnteredOperation " + lastEnteredOperation);
    switch (lastEnteredOperation) {
         case '+':
            GetSum(lastEnteredOperation); 
            break;
        case '-':
            GetDifference(lastEnteredOperation);
            break;
        case '÷':
            GetQoutient(lastEnteredOperation);
            break;
        case '^':
            GetSquared(lastEnteredOperation);
            break;
        case 'x':
            GetProduct(lastEnteredOperation);
            break;
        default:
            console.log("equals to nothing");
    }

}
function Clear() {
    displayNumber.innerHTML = "0";
    displayString = "";
    currentNumber = [];
}
function ClearEverything() {
    count = [];
    numbers = [];
    currentNumber = [];
    displayNumber.innerHTML = "0";
    total.innerHTML = "0";
    displayString = "";
    totalAmount = 0;

}

function Back() {

    if (displayString.length > 1) {

        displayString = displayString.substring(0, displayString.length - 1);

    } else {
        displayString = "0";
    }
    
    displayNumber.innerHTML = displayString;
    currentNumber.pop();
    
}