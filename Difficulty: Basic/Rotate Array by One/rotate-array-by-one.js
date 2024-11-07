//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript
//  Position this line where user code will be pasted.
//  Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        const arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        obj.rotate(arr);
        console.log(arr.join(' '));
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
class Solution {
    rotate(arr) {
        const n = arr.length;
        if (n === 0) return arr;
        const lastEl = arr[n - 1];
        for (let i = n - 1; i > 0; i--) arr[i] = arr[i - 1];
        arr[0] = lastEl;
        return arr;
    }
}