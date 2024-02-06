function addition(a,b){
    let result = a + b;
    return result;
}
function subtruction(a, b){
    let result = a - b;
    return result;
}
function multiply(a, b){
    let result = a * b;
    return result ;
}
function division(a,b){
    let result = a / b;
    return result;
}

function calculator(a,b,operation){
    if(operation === 'addition'){
        let callFun = addition(a, b);
        return callFun;
    }
    else if(operation === 'subtruction'){
        let callFun = subtruction(a,b);
        return callFun;
    }
    else if(operation === 'multiply' ){
        let callFun = multiply(a,b);
        return callFun;
    }
    else if(operation === 'division' ){
        let callFun = division(a,b);
        return callFun;
    }
    else{
        return 'please vul hoice. ';
    }
}

let resultOfFuncion = calculator(20,10, 'subtruction');
document.write('function nested : ',resultOfFuncion)