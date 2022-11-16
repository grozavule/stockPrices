/*
This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
*/

const findHighestPriceIndex = prices => {
    let highestPriceIndex = 0;
    let highestPrice = prices[0];
    for(let i = 1; i < prices.length; i++)
    {
        if(prices[i] > highestPrice)
        {
            highestPrice = prices[i];
            highestPriceIndex = i;
        }
    }
    return highestPriceIndex;
}

const best = prices => {
    let highestPriceIndex = findHighestPriceIndex(prices);
    earlierPrices = prices.slice(0, highestPriceIndex);

    let lowestPrice = earlierPrices[0];
    let lowestPriceIndex = 0;

    for(let i = 0; i < earlierPrices.length; i++)
    {
        if(earlierPrices[i] < lowestPrice)
        {
            lowestPrice = earlierPrices[i];
            lowestPriceIndex = i;
        }
    }
    return prices[highestPriceIndex] - prices[lowestPriceIndex];
}

const prices1 = [15, 10, 20, 22, 1, 9];
const prices2 = [2, 3, 10, 6, 4, 8, 1];
const prices3 = [7, 9, 5, 6, 3, 2];
const prices4 = [0, 100];

console.log(best(prices1));
console.log(best(prices2));
console.log(best(prices3));
console.log(best(prices4));