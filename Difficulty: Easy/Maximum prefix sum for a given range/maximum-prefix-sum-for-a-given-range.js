//{ Driver Code Starts
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
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let leftIndex = readLine().split(' ').map(x => parseInt(x));
        let rightIndex = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let result = obj.maxPrefixes(arr, leftIndex, rightIndex);
        console.log(result.join(' '));
        console.log("~");
    }
}
// } Driver Code Ends


class Solution {
    maxPrefixes(arr, leftIndex, rightIndex) {
        const results = [];
        for (let q = 0; q < leftIndex.length; q++) {
            let l = leftIndex[q], r = rightIndex[q], maxPrefixSum = -Infinity, currSum = 0;
            for (let i = l; i <= r; i++) {
                currSum += arr[i];
                maxPrefixSum = Math.max(maxPrefixSum, currSum);
            }
            results.push(maxPrefixSum);
        }
        return results;
    }
}