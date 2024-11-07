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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.inversionCount(arr));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to count inversions in the array.
    mergeAndCount(arr, tempArr, left, mid, right) {
        let i = left, j = mid + 1, k = left, invCount = 0;
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                tempArr[k] = arr[i];
                i++
            } else {
                tempArr[k] = arr[j];
                invCount += (mid - i + 1);
                j++;
            }
            k++;
        }
        while (i <= mid) {
            tempArr[k] = arr[i];
            i++;
            k++;
        }
        while (j <= right) {
            tempArr[k] = arr[j];
            j++;
            k++;
        }
        for (let p = left; p <= right; p++) arr[p] = tempArr[p];
        return invCount;
    }
    
    mergeSortAndCount(arr, tempArr, left, right) {
        let invCount = 0;
        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            invCount += this.mergeSortAndCount(arr, tempArr, left, mid);
            invCount += this.mergeSortAndCount(arr, tempArr, mid + 1, right);
            invCount += this.mergeAndCount(arr, tempArr, left, mid, right);
        }
        return invCount;
    }
    
    inversionCount(arr) {
        const n = arr.length;
        const t = new Array(n);
        return this.mergeSortAndCount(arr, t, 0, n - 1);
    }
}