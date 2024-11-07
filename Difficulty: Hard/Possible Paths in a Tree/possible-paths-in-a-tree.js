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
        
        
        let edges = [];
        for(let i=0;i<n-1;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            edges.push(a);
        }
        
        
        let q = parseInt(readLine());
        
        
        let queries = new Array(q);
        let input_queries = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<q;i++){
            queries[i] = input_queries[i];
        }
        
        let obj = new Solution();
        let res = obj.maximumWeight(n, edges, q, queries);
        
        let S_res = '';
        for(let i=0;i<res.length;i++)
        {
            S_res+=(res[i]);
            S_res+=' ';
        }
        console.log(S_res);
        
    }
}

// } Driver Code Ends



class Solution {
    constructor() {
        this.parent = [];
        this.size = [];
    }
/**
* @param number n
* @param number[][] edges
* @param number q
* @param number[] queries

* @returns number[]
*/
    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    
    union(x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        
        if (rootX !== rootY) {
            if (this.size[rootX] < this.size[rootY]) [rootX, rootY] = [rootY, rootX];
            this.parent[rootY] = rootX;
            let newPaths = this.size[rootX] * this.size[rootY];
            this.size[rootX] += this.size[rootY];
            return newPaths;
        }
        return 0;
    }
    
    maximumWeight(n, edges, q, queries) {
        edges.sort((a, b) => a[2] - b[2]);
        
        let queryWithIndex = queries.map((val, idx) => [val, idx]);
        queryWithIndex.sort((a, b) => a[0] - b[0]);
        
        this.parent = Array(n + 1).fill(0).map((_, i) => i);
        this.size = Array(n + 1).fill(1);
        
        let result = Array(q).fill(0), edgeIdx = 0, pathCount = 0;
        for (let [limit, idx] of queryWithIndex) {
            while (edgeIdx < edges.length && edges[edgeIdx][2] <= limit) {
                let [u, v] = edges[edgeIdx].slice(0, 2);
                pathCount += this.union(u, v);
                edgeIdx++;
            }
            result[idx] = pathCount;
        }
        return result;
    }
}
        
