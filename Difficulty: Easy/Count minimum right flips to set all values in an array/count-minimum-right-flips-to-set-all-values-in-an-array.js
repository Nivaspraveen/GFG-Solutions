//{ Driver Code Starts
// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.countFlips(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

class Solution {
    // Function to count number of flips required to make all elements 0.
    countFlips(arr) {
        let switches = 0, flip = false;
        for (let i = 0; i < arr.length; i++) {
            let currState = arr[i] ^ flip;
            if (currState === 0) {
                switches++;
                flip = !flip;
            }
        }
        return switches;
    }
}