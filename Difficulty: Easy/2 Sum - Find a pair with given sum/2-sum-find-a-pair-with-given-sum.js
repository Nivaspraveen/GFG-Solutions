//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let target = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.twoSum(arr, target);
        if (res.length === 0) {
            process.stdout.write('[]\n');
        } else {
            // sort the result before printing
            res.sort((a, b) => a - b);
            for (let i = 0; i < res.length; i++) {
                process.stdout.write(res[i] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
class Solution {
    twoSum(arr, target) {
        arr.sort((a, b) => a - b);
        let left = 0, right = arr.length - 1;
        while (left < right) {
            const sum = arr[left] + arr[right];
            if (sum === target) return [arr[left], arr[right]];
            else if (sum < target) left++;
            else right--;
        }
        return [];
    }
}