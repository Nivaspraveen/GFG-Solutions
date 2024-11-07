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
    while (t-- > 0) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let sum = parseInt(readLine());

        let obj = new Solution();
        let list = obj.subarraySum(arr, sum);

        if (list.length === 0) {
            console.log("[]");
        } else {
            console.log(list.join(" "));
        }
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    // Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, sum) {
        let sumMap = new Map();
        let currSum = 0;
        
        for (let i = 0; i < arr.length; i++) {
            currSum += arr[i];
            if (currSum === sum) return [1, i + 1];
            if (sumMap.has(currSum - sum)) return [sumMap.get(currSum - sum) + 2, i + 1];
            sumMap.set(currSum, i);
        }
        return [];
    }
}