//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function printlist(head){
    let temp = head;
    let s = '';
    while (temp !== null){
        s += temp.data +" ";
        temp = temp.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let p = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let head = new Node(parseInt(input_line[0])) ;
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(parseInt(input_line[i]));
            tail.next.prev = tail;
            tail = tail.next;
        }
        
        let obj = new Solution();
        let str = obj.rotateDLL(head, p);
        printlist(str);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {Node} start
 * @param {number} p
 * @returns {Node}
*/

class Solution {
    //Function to rotate a doubly linked list.
    rotateDLL(start, p) {
        if (!start || p <= 0) return start;
        let curr = start, count = 1;
        
        while (count < p && curr) {
            curr = curr.next;
            count++;
        } 
        if (!curr) return start;
        
        let pthNode = curr, newStart = pthNode.next;
        if (!newStart) return start;
        let last = newStart;
        while (last.next) last = last.next;
            
        pthNode.next = null;
        newStart.prev = null;
        last.next = start;
        start.prev = last;
        
        return newStart;
    }
}