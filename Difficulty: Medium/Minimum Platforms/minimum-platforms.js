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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let dep = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) dep[i] = input_ar2[i];
        let obj = new Solution();
        let res = obj.findPlatform(arr, dep);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of platforms required at the
    // railway station such that no train waits.
    findPlatform(arr, dep) {
       const n = arr.length;
       arr.sort((a, b) => a - b);
       dep.sort((a, b) => a - b);
       
       let i = 0, j = 0, platformsNeeded = 0, maxPlatforms = 0;
       while (i < n && j < n) {
           if (arr[i] <= dep[j]) {
               platformsNeeded++;
               i++;
               maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
           } else {
               platformsNeeded--;
               j++;
           }
       }
       return maxPlatforms;
    }
}