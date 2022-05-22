
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const values = new Array(amount + 1).fill(amount + 1);
    values[0] = 0;
    for (let currentValue = 1; currentValue <= amount; ++currentValue) {
        for (let coin of coins) {
            if (coin <= currentValue) {
                values[currentValue] = Math.min(values[currentValue - coin] + 1, values[currentValue]);
            }
        }
    }
    return values[amount] <= amount ? values[amount] : -1;
};
