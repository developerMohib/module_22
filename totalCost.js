let productsAll = [
    {name : 'Ayna', price: 50, color : 'red'},
    {name : 'Chiruni', price: 20, color : 'red'},
    {name : 'Cream', price: 40, color : 'red'},
    {name : 'brush', price: 30, color : 'red'}
];

function shoppingCost(productsAll){
    let total = 0;
    for (const product of productsAll) {
        total = total + product.price;
    }
    return total;
}

let myCostAll = shoppingCost(productsAll);
console.log('My shopping cost : ', myCostAll , '<br>');
document.write('My shopping cost : ', myCostAll , '<br>');
