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


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let S = readLine().trim();    
    let obj = new Solution();
    let res = obj.longestPalin(S);
    console.log(res);
  
console.log("~");
}

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {string} 
*/

class Solution {
  longestPalin(S){
    if (S.length <= 1) return S;
    let start = 0, maxLength = 1;
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < S.length && S[left] === S[right]) {
            left--;
            right++;
        }
        const length = right - left - 1;
        if (length > maxLength) {
            maxLength = length;
            start = left + 1;
        }
    };
    for (let i = 0; i < S.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }
    return S.slice(start, start + maxLength);
  }
}