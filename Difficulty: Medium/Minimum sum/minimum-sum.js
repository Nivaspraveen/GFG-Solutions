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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.minSum(arr);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {string}
 */

class Solution {
    addStrings(n1, n2) {
        let result = '';
        let carry = 0;
        
        // Ensure both strings are the same length by padding with leading zeros
        n1 = n1.padStart(Math.max(n1.length, n2.length), '0');
        n2 = n2.padStart(Math.max(n1.length, n2.length), '0');
        
        // Add each digit from the least significant to the most significant
        for (let i = n1.length - 1; i >= 0; i--) {
            const sum = parseInt(n1[i]) + parseInt(n2[i]) + carry;
            result = (sum % 10) + result;
            carry = Math.floor(sum / 10);
        }
        
        // If there's any remaining carry, add it to the front of the result
        if (carry) result = carry + result;
        
        return result;
    }
    
    minSum(arr) {
        arr.sort((a, b) => a - b);
        
        // Initialize two numbers as strings to form the two minimal numbers
        let num1 = '', num2 = '';
        
        // Distribute digits alternately to form the two numbers
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                num1 += arr[i];
            } else {
                num2 += arr[i];
            }
        }
        
        // Calculate the sum of the two numbers represented as strings
        return this.addStrings(num1, num2).replace(/^0+/, '') || '0';
    }
}
