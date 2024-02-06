
document.write(' <br>');
function needToEat(samucaQuantity, singaraQuantity, chipsQuantity){
    let samuca = 7;
    let singara = 6;
    let chips = 9;

    let samucaCost = samuca * samucaQuantity;
    let singaraCost = singara * singaraQuantity;
    let chipsCost = chips * chipsQuantity;

    let payment = samucaCost + singaraCost + chipsCost;
    return payment;

}
let finalCost = needToEat(3, 4, 1);
document.write('I have to pay shoper : ', finalCost, ' tk <br>');

/**
 * shirt price : 500
 * pant price : 800
 * shoe price : 1200
 * sunglass price : 200
 */

document.write('<br>');

function mrPerfect(shirQuantity, pantQuantity, shoeQuantity, sunglassQuantity){
    let shirt = 500;
    let pant = 800;
    let shoe = 1200;
    let sunglass = 200;

    let shirtTotalPrice = shirt * shirQuantity ;
    let pantTotalPrice = pant * pantQuantity;
    let shoeTotalPrice = shoe * shoeQuantity;
    let sunglassTotalPrice = sunglass * sunglassQuantity;

    let totalCost = shirtTotalPrice + pantTotalPrice + shoeTotalPrice + sunglassTotalPrice;

    return totalCost;
}
let forMakePerfect = mrPerfect(2, 1, 1, 1);
document.write( 'If i spend ', forMakePerfect, ' tk. i will be Mr. Perfect. <br>');