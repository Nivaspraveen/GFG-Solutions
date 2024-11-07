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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();
        let res = obj.findUnion(a, b);
        printArray(res, res.length);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
        let n = a.length, m = b.length, i = 0, j = 0, result = [];
        
        while (i < n && j < m) {
            if (i > 0 && a[i] === a[i - 1]) {
                i++;
                continue;
            }
            if (j > 0 && b[j] === b[j - 1]) {
                j++;
                continue;
            }
            if (a[i] < b[j]) {
                result.push(a[i]);
                i++;
            } else if (a[i] > b[j]) {
                result.push(b[j]);
                j++;
            } else {
                result.push(a[i]);
                i++;
                j++;
            }
        }
        while (i < n) {
            if (i === 0 || a[i] !== a[i - 1]) result.push(a[i]);
            i++;
        }
        while (j < m) {
            if (j === 0 || b[j] !== b[j - 1]) result.push(b[j]);
            j++;
        }
        return result;
    }
}