//{ Driver Code Starts
// Initial Template for javascript

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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        arr = obj.convertToWave(arr);
        let ans = "";
        for (let element of arr) ans += element + " ";

        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

class Solution {
    // arr: input array
    // Function to sort the array into a wave-like array.
    convertToWave(arr) {
        for (let i = 0; i < arr.length - 1; i += 2) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        return arr;
    }
}