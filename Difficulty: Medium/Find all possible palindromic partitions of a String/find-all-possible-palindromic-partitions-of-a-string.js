//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let S = readLine();
    let obj = new Solution();
    let res = obj.allPalindromicPerms(S);
    for(let row of res)
      printArray(row,row.length);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {string[][]}
 */

class Solution {
    allPalindromicPerms(S){
        const result = [];
        
        const isPalindrome = (str, left, right) => {
            while (left < right) {
                if (str[left] !== str[right]) return false;
                left++;
                right--;
            }
            return true;
        };
        
        const backtrack = (start, currPartition) => {
            if (start === S.length) {
                result.push([...currPartition]);
                return;
            }
            for (let end = start; end < S.length; end++) {
                if (isPalindrome(S, start, end)) {
                    currPartition.push(S.slice(start, end + 1));
                    backtrack(end + 1, currPartition);
                    currPartition.pop();
                }
            }
        };
        backtrack(0, []);
        return result;
    }
}