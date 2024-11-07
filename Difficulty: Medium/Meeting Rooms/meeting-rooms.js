//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

// Initial Template for javascript
// Position this line where user code will be pasted.

const readline = require('readline');

function main() {
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let t;
    let testCases = [];
    let inputCount = 0;

    rl.question('', (line) => {
        t = parseInt(line.trim());
        inputCount = t * 2;

        rl.on('line', (line) => {
            testCases.push(line.trim());
            if (testCases.length === inputCount) {
                rl.close();
            }
        });
    });

    rl.on('close', () => {
        const solution = new Solution();
        for (let i = 0; i < t; i++) {
            const arr1 = testCases[2 * i].split(' ').map(Number);
            const arr2 = testCases[2 * i + 1].split(' ').map(Number);
            const res = solution.canAttend(arr1, arr2);

            if (res)
                console.log("true");
            else
                console.log("false")
                console.log("~");
        }
    });
}

main();

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} start
 * @param {number[]} end
 * @returns {boolean}
 */
class Solution {
    canAttend(start, end) {
        if (start.length === 0) return true;
        const meetings = start.map((s, i) => [s, end[i]]);
        meetings.sort((a, b) => a[0] - b[0]);
        
        for (let i = 0; i < meetings.length - 1; i++) {
            if (meetings[i][1] > meetings[i + 1][0]) return false;
        }
        return true;
    }
}
