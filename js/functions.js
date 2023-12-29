// import buttonCreation from helper.js;

function add(num1,num2){
    return num1+num2;
}


function subtract(num1,num2){
    return num1-num2;
}


function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,operator,num2){
    let res = 0;
    operator = String(operator)
    
    if(operator == "+")
        res = add(num1,num2);

    else if(operator == "-")
        res = subtract(num1,num2);

    else if(operator == "*")
        res = multiply(num1,num2);
    else
        res = divide(num1,num2);
    
    return res
}