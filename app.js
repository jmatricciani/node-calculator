const prompt = require('readline-sync');

const acceptedOperators = ['+','-','*','/'];
const regex = /(-?\d+)\s*([\+\/\*-])\s*(-?\d+)/;

const calculate = () => {
    let num1,num2,operator,answer;
    let input = prompt.question("Please choose an operator [ + - * / ] or enter whole operation eg. [x + y]: ");
    if(validateOperator(input)){
        operator = input;
        while(!(num1 = inputNumber("Enter the first number: ")));
        while(!(num2 = inputNumber("Enter the second number: ")));
        answer = getAnswer(num1,num2,operator);
        console.log("Your result is: ",num1,operator,num2,'=',answer);
        return true;
    } else if(validateOperations(input)){
        const inputData = regex.exec(input);
        num1 = Number(inputData[1]);
        num2 = Number(inputData[3]);
        operator = inputData[2];
        logResult(num1,num2,operator,getAnswer(num1,num2,operator));
        return true;
    }
    else {
        console.log("Invalid Operator Selection.");
        return false;
    }
}

const inputNumber = (msg) => {
    let num = prompt.question(msg);
    if(num = parseInt(num)) return num;
    else {
        console.log("Your entry is not a valid number.");
        return false;
    }
}

const getAnswer = (num1,num2,operator) => {
    switch(operator){
        case '+': 
            return num1 + num2;
        case '-': 
            return num1 - num2;
        case '*': 
            return num1 * num2;
        case '/': 
            return num1 / num2;
    }
}
const validateOperator = (input) => {
    if(acceptedOperators.includes(input)) return true;
    return false;
}
const validateOperations = (input) => {
    if(regex.test(input)) return true;
    return false;
}

const logResult = (num1,num2,operator,answer) => {
    console.log("Your result is: ",num1,operator,num2,'=',answer);
}


while(!calculate());
