let products = [
    {name : 'Ayna', price: 50, color : 'red', quantity : 2},
    {name : 'Chiruni', price: 20, color : 'red' ,quantity : 3},
    {name : 'Cream', price: 40, color : 'red',quantity : 4},
    {name : 'brush', price: 30, color : 'red',quantity : 1}
];

function shoppingCost(products){
    let total = 0;
    for (const product of products) {
        let productCost = product.price * product.quantity;
        total = total + productCost;
    }
    return total;
}

let myCost = shoppingCost(products);
console.log('My shopping cost : ', myCost , '<br>');
document.write('<br> My shopping cost with quantity : ', myCost , '<br>');