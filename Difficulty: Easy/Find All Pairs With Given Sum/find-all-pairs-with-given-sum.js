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
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.findAllPairs(arr, k);
        if (res.length === 0) {
            process.stdout.write('[]\n');
        }
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                process.stdout.write(res[i][j] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}

// } Driver Code Ends


// User function Template for javascript
class Solution {
    /**
     * @param {number[]} arr
     * @param {number} target
     * @return {number[][]}
     */
    findAllPairs(arr, target) {
        const indexMap = new Map(), pairs = [];
        for (let i = 0; i < arr.length; i++) {
            const comp = target - arr[i];
            if (indexMap.has(comp)) {
                const indices = indexMap.get(comp);
                for (const index of indices) pairs.push([index, i]);
            }
            if (!indexMap.has(arr[i])) indexMap.set(arr[i], []);
            indexMap.get(arr[i]).push(i);
        }
        pairs.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        });
        return pairs;
    }
}