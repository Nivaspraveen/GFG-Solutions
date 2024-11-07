//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());

    for (let i = 0; i < t; i++) {
        let e = parseInt(readLine());
        let v = parseInt(readLine());

        let edges = [];
        for (let i = 0; i < e; i++) {
            let edge = readLine().split(' ').map(Number);
            edges.push(edge);
        }

        let obj = new Solution();
        let res = obj.connectedcomponents(v, edges);

        // Print each connected component on a new line
        res.forEach(component => {
            let ss = "";
            for (let j = 0; j < component.length; j++) {
                ss += component[j];
                ss += ' ';
            }
            console.log(ss);
        });
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    /**
    * @param number v
    * @param number[][] edges

    * @returns number[][]
    */
    connectedcomponents(v, edges) {
        const uf = new UnionFind(v);
        for (const [u, w] of edges) uf.union(u, w);
        const components = {};
        for (let i = 0; i < v; i++) {
            const root = uf.find(i);
            if (!components[root]) components[root] = [];
            components[root].push(i);
        }
        return Object.values(components)
            .map(comp => comp.sort((a, b) => a - b))
            .sort((a, b) => a[0] - b[0]);
    }
}

class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(1);
    }
    find(u) {
        if (this.parent[u] !== u) this.parent[u] = this.find(this.parent[u]);
        return this.parent[u];
    }
    union(u, v) {
        const rootU = this.find(u), rootV = this.find(v);
        if (rootU !== rootV) {
            if (this.rank[rootU] > this.rank[rootV]) this.parent[rootV] = rootU;
            else if (this.rank[rootU] < this.rank[rootV]) this.parent[rootU] = rootV;
            else {
                this.parent[rootV] = rootU;
                this.rank[rootU] += 1;
            }
        }
    }
}