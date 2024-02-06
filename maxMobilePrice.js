let mobiles = [
    {name:'sumsung', price : 20000, color : 'black', camera : '12 mp'},
    {name:'oppo', price : 21000, color : 'black', camera : '12 mp'},
    {name:'xiaomi', price : 22000, color : 'black', camera : '12 mp'},
    {name:'vivo', price : 25000, color : 'black', camera : '12 mp'},
    {name:'iphone', price : 33000, color : 'black', camera : '12 mp'},
    {name:'lenevo', price : 24000, color : 'black', camera : '12 mp'}
];

function maxPrice(mobiles){
    let max = mobiles[0];
    for (const mobile of mobiles) {
        if(mobile.price > max.price){
            max = mobile;
        }
    }
    return max ;
}
let bestMobile = maxPrice(mobiles);
console.log('Best Price Mobile : ', bestMobile, " <br> ");
document.write(' <br> Best Price Mobile : ', bestMobile, " check console for better known <br> ");