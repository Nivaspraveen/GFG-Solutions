//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code

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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let res = obj.countgroup(arr);
        console.log(res);
        console.log("~");

        // console.log(ans.join(' '));
        tc--;
    }
}
// } Driver Code Ends



class Solution {
    /**
     * @param number[] arr
     */
    countgroup(arr) {
        const mod = 1e9 + 7;
        let totalXor = 0;
        for (let num of arr) totalXor ^= num;
        if (totalXor !== 0) return 0;
        let n = arr.length;
        return (Math.pow(2, n - 1) - 1) % mod;
    }
}
