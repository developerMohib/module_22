
function discoutedPrice(quantity){
    if(quantity <= 100){
        let total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        let total = quantity * 70;
        return total;
    }
    else{
        let total = quantity * 50;
        return total;
    }
}
let myCostAfterDiscount = discoutedPrice(210);
document.write('My Cost After Discount : ', myCostAfterDiscount , '<br>');