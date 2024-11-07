//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findKRotation(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

class Solution {
    findKRotation(arr) {
        let left = 0, right = arr.length - 1;
        if (arr[left] < arr[right]) return 0;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] > arr[mid + 1]) return mid + 1;
            if (arr[mid] < arr[mid - 1]) return mid;
            if (arr[mid] >= arr[left]) left = mid + 1;
            else right = mid - 1;
        }
        return 0;
    }
}
