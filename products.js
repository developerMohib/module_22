let products = [
    { name: 'Ayna', price: 50, color: 'red' },
    { name: 'Chiruni', price: 20, color: 'red' },
    { name: 'Cream', price: 40, color: 'red' },
    { name: 'brush', price: 30, color: 'red' }
];
function shoppingCost(products, quantity) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    mytotalCost = total;
    return total;
}
let myCost = shoppingCost(products, quantity);
console.log('My shopping cost : ', myCost, '<br>');
document.write(' <br> My shopping cost with quantity: ', myCost, '<br>');
