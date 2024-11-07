//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Queue {
    constructor() {
        this.arr = [];
        this.front = 0;
    }

    push(a) { this.arr.push(a); }

    pop() {
        if (this.arr.length != this.front) {
            let x = this.arr[this.front];
            this.front++;
            return x;
        } else
            return -1;
    }

    front_ele() { return this.arr[this.front]; }

    empty() {
        if (this.arr.length != this.front)
            return false;
        else
            return true;
    }
}

function
    main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let q = new Queue();
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar0[0];
        let k = input_ar0[1];
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) q.push(input_ar1[i]);
        let obj = new Solution();
        let a = obj.modifyQueue(q, k);
        let res = '';
        while (!a.empty()) {
            res += a.front_ele() + " ";
            a.pop();
        }
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Queue} q
 * @param {number} k
 * @returns {Queue}
*/

/*
class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }

    push(a){
        this.arr.push(a);
    }

    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }

    front_ele(){
        return this.arr[this.front];
    }

    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}
*/

class Solution {
    // Function to reverse first k elements of a queue.
    modifyQueue(q, k) {
        let stack = [];
        for (let i = 0; i < k; i++) stack.push(q.pop());
        while (stack.length > 0) q.push(stack.pop());
        let remEl = q.arr.length - q.front;
        for (let i = 0; i < remEl - k; i++) q.push(q.pop());
        return q;
    }
}