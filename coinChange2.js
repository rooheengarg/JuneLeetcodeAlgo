/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
   dp[0] = 1;

   console.log('dp =>', dp);
   for (let i=0;i<coins.length;i++) { // iterate the types of coin
       for (let j=1;j<=amount;j++) {
           if (j >= coins[i]) {
               // dp[j] is the combinations for amount j for not using the current coin
               // dp[j - coins[i]] is is the combinations for using the current coin
               console.log('J is =>',j);
                console.log('Before dp[j] is =>',dp[j]);
               dp[j] = dp[j] + dp[j - coins[i]];
                console.log('After ==> dp[j] is =>',dp[j]);
           }
       }
   }
   return dp[amount];
   
};

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1