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
    num1 = Number(num1)
    num2 = Number(num2)
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


// function showDisplay(){
//     let numEvents = document.querySelectorAll('button');
//     numEvents = Array.from(numEvents);
//     numEvents.forEach(numEvent => 
//         numEvent.addEventListener('click', () => {test(numEvent.textContent)}
//         // val => 
//         // {
//         //     console.log();
//         // }
//         )
//         );
// }

// function showDisplay(){
    
// }

let numEvents = document.querySelectorAll('button');
    numEvents.forEach(numEvent => numEvent.addEventListener('click',() => test(numEvent.textContent)))
        // val => 
        // {
        //     console.log();
        // }
        ;

let connect = "";
function test(val){
    let displayNum = document.querySelector('.display>.one-one');
    let idk = 0
    connect = connect.concat(val);
    console.log("connect "+connect);
    displayNum.textContent = connect;
    let add = connect.indexOf("+")
    let sub = connect.indexOf("-")
    let mul = connect.indexOf("*")
    let div = connect.indexOf("/")
    idx = add * sub * mul * div;
    if(val == "C"){
        displayNum.textContent = null;
        connect = "";
    }
    console.log(idx)
    if(val == "=" && idx != 1){
        idx *= -1;
        let res = operate(connect.slice(0,idx),connect[idx],connect.slice(idx+1,connect.length-1));
        console.log("res "+res);
        displayNum.textContent = res;
        connect = String(res);
        console.log(idx)
        
    }
        
    // console.log('button pressed ' + val);
}