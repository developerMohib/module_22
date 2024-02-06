
function layerDiscoutedPrice(quantity){
    let first100Price = 100;
    let second200Price = 80;
    let abovePrice = 50;

    if(quantity <= 100){
        let total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        let primary100Total = 100 * first100Price;
        let total = ((quantity - 100 ) * second200Price) + primary100Total;
        return total;
    }
    else{
        let primary100Total = 100 * first100Price;
        let second200total = (100 * second200Price) + primary100Total;
        let above200 = quantity - 200 ;
        let total = primary100Total + second200total + (above200 * abovePrice);
        return total;
    }
}
let myCostAfterLayerDiscount = layerDiscoutedPrice(200);
document.write('My Cost After Discount : ', myCostAfterLayerDiscount , '<br>');