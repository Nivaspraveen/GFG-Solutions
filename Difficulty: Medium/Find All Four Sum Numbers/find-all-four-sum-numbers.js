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

function printArray(res, n) {

    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < res[i].length; j++) {
            s += res[i][j];
            s += " ";
        }
        console.log(s);
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let k = input_ar1[0];
        let obj = new Solution();
        let res = obj.fourSum(arr, k);
        if (res.length === 0) {
            console.log(-1);
        } else {
            printArray(res, res.length);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[][]}
 */

class Solution {
    fourSum(arr, k) {
        arr.sort((a, b) => a - b);
        const quadruples = [];
        for (let i = 0; i < arr.length - 3; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) continue;
            for (let j = i + 1; j < arr.length - 2; j++) {
                if (j > i + 1 && arr[j] === arr[j - 1]) continue;
                let left = j + 1, right = arr.length - 1;
                while (left < right) {
                    const sum = arr[i] + arr[j] + arr[left] + arr[right];
                    if (sum === k) {
                        quadruples.push([arr[i], arr[j], arr[left], arr[right]]);
                        while (left < right && arr[left] === arr[left + 1]) left++;
                        while (left < right && arr[right] === arr[right - 1]) right--;
                        left++;
                        right--;
                    }
                    else if (sum < k) left++;
                    else right--;
                }
            }
        }
        return quadruples;
    }
}
