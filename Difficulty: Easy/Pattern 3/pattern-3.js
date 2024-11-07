//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        let obj = new Solution();
        obj.printTriangle(n);
    
console.log("~");
}
}

// } Driver Code Ends



class Solution {
/**
* @param number n

* @returns none
*/
    printTriangle(n) {
        for (let i = 1; i <= n; i++) {
            let row = [];
            for (let j = 1; j <= i; j++) row.push(j);
            console.log(row.join(' '));
        }
    }
}
        
