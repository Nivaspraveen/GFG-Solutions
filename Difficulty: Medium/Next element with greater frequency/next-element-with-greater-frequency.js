//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();
        let ans = obj.print_next_greater_freq(arr, n);
        let s = "";
        for(let i=0;i<ans.length;i++) {
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    //Function to print next greater frequency element for each element.
    print_next_greater_freq(arr, n) {
        const freqMap = {}, result = new Array(n).fill(-1), stack = [];
        for (let num of arr) {
            if (freqMap[num]) freqMap[num]++;
            else freqMap[num] = 1;
        }
        
        for (let i = n - 1; i >= 0; i--) {
            const currFreq = freqMap[arr[i]];
            while (stack.length > 0 && freqMap[stack[stack.length - 1]] <= currFreq) stack.pop();
            if (stack.length > 0) result[i] = stack[stack.length - 1];
            stack.push(arr[i]);
        }
        return result;
    }
}