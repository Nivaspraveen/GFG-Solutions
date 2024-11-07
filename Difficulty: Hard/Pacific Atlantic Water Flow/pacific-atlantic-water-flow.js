//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

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

        let a = new Array(2);
        let input_a = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2; i++) {
            a[i] = input_a[i];
        }

        let arr = [];
        for (let i = 0; i < a[0]; i++) {
            let a = readLine().trim().split(' ').map((x) => parseInt(x));
            arr.push(a);
        }

        let obj = new Solution();
        let res = obj.countCoordinates(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number[][] mat

    * @returns number
    */
    countCoordinates(mat) {
        if (!mat.length) return 0; 
        const n = mat.length;
        const m = mat[0].length;
        const pacific = Array.from({ length: n }, () => Array(m).fill(false));
        const atlantic = Array.from({ length: n }, () => Array(m).fill(false));
        const directions = [
            [0, 1], 
            [1, 0], 
            [0, -1], 
            [-1, 0] 
        ];
    
        const dfs = (x, y, visited) => {
            const stack = [[x, y]]; 
            visited[x][y] = true;
            while (stack.length) {
                const [currX, currY] = stack.pop();
    
                for (const [dx, dy] of directions) {
                    const nx = currX + dx;
                    const ny = currY + dy;
                    
                    if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && mat[nx][ny] >= mat[currX][currY]) {
                        visited[nx][ny] = true;
                        stack.push([nx, ny]);
                    }
                }
            }
        };
    
        for (let i = 0; i < n; i++) {
            dfs(i, 0, pacific); 
            dfs(i, m - 1, atlantic); 
        }
        for (let j = 0; j < m; j++) {
            dfs(0, j, pacific); 
            dfs(n - 1, j, atlantic); 
        }
    
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (pacific[i][j] && atlantic[i][j]) count++;
            }
        }
        return count;
    }
}
