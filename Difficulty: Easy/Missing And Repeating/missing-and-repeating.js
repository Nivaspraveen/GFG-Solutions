//{ Driver Code Starts
// Initial Template for JavaScript

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().trim().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findTwoElement(arr);
        console.log(`${ans[0]} ${ans[1]}`);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to find two repeating elements in an array of size n.
    findTwoElement(arr) {
       const n = arr.length;
       const seen = new Array(n + 1).fill(false);
       let duplicate = -1, missing = -1;
       for (let i = 0; i < n; i++) {
           if (arr[i] < 1 || arr[i] > n) continue;
           if (seen[arr[i]]) duplicate = arr[i];
           else seen[arr[i]] = true;
       }
       for (let i = 1; i <= n; i++) {
           if (!seen[i]) {
               missing = i;
               break;
           }
       }
       return [duplicate, missing];
    }
}