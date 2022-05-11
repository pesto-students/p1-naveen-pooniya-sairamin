function createArray(n){
    let prices = new Array(n);
    for(let i=0;i<n;i++){
        prices[i]=Math.floor(Math.random()*105);
    }
    return prices;
}
function bestBuyCalc (prices){
    let bestBuy =0, n = prices.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(bestBuy<prices[j]-prices[i])
            bestBuy = prices[j]-prices[i];
        }
    }
    return bestBuy;
}
let prices = createArray(10);
console.log(prices);
console.log(bestBuyCalc(prices));