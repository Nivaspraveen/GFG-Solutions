//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let prices = new Array();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < input_ar1.length; i++) prices.push(input_ar1[i]);
        let obj = new Solution();
        let res = obj.maximumProfit(prices);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} prices
 * @returns {number}
 */

class Solution {
    // Function to find the maximum profit.
    maximumProfit(prices) {
        let minPrice = Infinity, maxProfit = 0;
        for (let price of prices) {
            if (price < minPrice) minPrice = price;
            const profit = price - minPrice;
            if (profit > maxProfit) maxProfit = profit;
        }
        return maxProfit;
    }
}