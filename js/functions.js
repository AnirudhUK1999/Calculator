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
    return (num1/num2).toFixed(2);
}

function operate(num1,operator,num2){
    let res = 0;
    num1 = Number(num1)
    num2 = Number(num2)
    operator = String(operator)
    
    switch (operator) {
        case "+":
            res = add(num1,num2);
            break;
        case "-":
            res = subtract(num1,num2);
            break;
        case "*":
            res = multiply(num1,num2);
            break;
        case "/":
            if(num2 == 0)
                return "ERR"
            res = divide(num1,num2);
            break;
        default:
            break;
        
    }
    return res;

    // if(operator == "+")
    //     res = add(num1,num2);

    // else if(operator == "-")
    //     res = subtract(num1,num2);

    // else if(operator == "*")
    //     res = multiply(num1,num2);
    // else
    //     res = divide(num1,num2);
    
    // return res
}

let perform = []

let numEvents = document.querySelectorAll('button');

numEvents.forEach(numEvent => 
    numEvent.addEventListener('click', () => addingToQueue(numEvent.textContent)))

let temp = ""
let show = "";
let startFlag = true;
let op = []
function addingToQueue(value){
    let displayNum = document.querySelector('.display>.one-one');   //select display
    show += value   //concat strings from buttons
    if(value != "=")
        displayNum.textContent = show; 
    if(value == "C"){
        displayNum.textContent = null;
        show = "";
        perform = []
        temp = ""
    }

    /*Check if button input is not a number 
     * Indicates number input from user finished
     * Push concated temp value and operation symbol to array
     * Finally clear the variables*/
    else if(!isFinite(value) && value != "C"){
        perform.push(temp);
        perform.push(value);
        temp = "";
        value = "";
    }

    if(value != "C")  //keep concatenating
        temp += value;
    
    
    // console.log(perform.length);
    /* if array size exceeds size 3, implies result should be calculated for pair of nums*/
    if(perform.length>3){
        op = perform.splice(0,3)
        let res = operate(op[0],op[1],op[2]);
        perform.unshift(res)
        displayNum.textContent = perform.join('').includes("=") ? perform.slice(0,-1).join('') : perform.join('');
        show = perform.join('') + value;  
    }
    
    // console.log("perform: "+perform)

}

    



