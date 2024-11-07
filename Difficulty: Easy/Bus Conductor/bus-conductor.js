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
        let chairs = new Array(n);
        for(let i=0;i<n;i++)
        {
            chairs[i] = parseInt(input_line[i]);
        }
        
        input_line = readLine().split(' ');
        let passengers = new Array(n);
        for(let i=0;i<n;i++)
        {
            passengers[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        let ans = obj.findMoves(n, chairs, passengers);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} chairs
 * @param {number[]} passengers
 * @returns {number}
*/
class Solution {
    //Function to find minimum number of moves to place all the
    //interpreters.
    findMoves(n, chairs, passengers) {
        chairs.sort((a, b) => a - b);
        passengers.sort((a, b) => a - b);
        let totalMoves = 0;
        for (let i = 0; i < n; i++) totalMoves += Math.abs(chairs[i] - passengers[i]);
        return totalMoves;
    }
}