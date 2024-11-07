//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n").map((string) => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function printList(head) {
    let s = "";
    while (head !== null) {
        s += head.data + " ";
        head = head.next;
    }
    console.log(s.trim());
}

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let arr = readLine().split(" ").map(Number);

        if (arr.length === 0) {
            console.log("");
            continue;
        }

        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.removeDuplicates(head);
        printList(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to remove duplicates from unsorted linked list.
    removeDuplicates(head) {
        if (!head) return null;
        let current = head;
        const seen = new Set();
        seen.add(current.data);
        
        while (current.next) {
            if (seen.has(current.next.data)) current.next = current.next.next;
            else {
                seen.add(current.next.data);
                current = current.next;
            }
        }
        return head;
    }
}