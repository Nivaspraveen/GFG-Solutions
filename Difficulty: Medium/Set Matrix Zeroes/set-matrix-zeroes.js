//{ Driver Code Starts
// Initial Template for javascript

'use strict';

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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s1 = readLine().split(" ").map(x => parseInt(x));
        let n = s1[0];
        let m = s1[1];
        let grid = new Array();
        for (let i = 0; i < n; i++) {
            let s2 = readLine().split(" ").map(x => parseInt(x));
            let a = new Array();
            for (let j = 0; j < m; j++) {
                a.push(s2[j]);
            }
            grid.push(a);
        }
        let obj = new Solution();
        obj.setMatrixZeroes(grid);
        let res = new Array();
        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < m; j++) {
                s += grid[i][j];
                s += " ";
            }
            res.push(s);
        }
        console.log(res.join("\n"));
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
class Solution {
    /**
     * @param {number[][]} arr
     * @returns {void}
     */
    setMatrixZeroes(matrix) {
        const rows = matrix.length, cols = matrix[0].length;
        let isRowZero = false, isColZero = false;
        
        for (let i = 0; i < cols; i++) {
            if (matrix[0][i] === 0) {
                isRowZero = true;
                break;
            }
        }
        
        for (let i = 0; i < rows; i++) {
            if (matrix[i][0] === 0) {
                isColZero = true;
                break;
            }
        }
        
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        for (let i = 1; i < rows; i++) {
            if (matrix[i][0] === 0) {
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        for (let i = 1; i < cols; i++) {
            if (matrix[0][i] === 0) {
                for (let j = 0; j < rows; j++) {
                    matrix[j][i] = 0;
                }
            }
        }
     
        if (isRowZero) {
            for (let i = 0; i < cols; i++) {
                matrix[0][i] = 0;
            }
        }
        
        if (isColZero) {
            for (let i = 0; i < rows; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}