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

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

function findNode(head, search_for) {
    let current = head;
    while (current !== null) {
        if (current.data == search_for) break;
        current = current.next;
    }
    return current;
}

function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.maxPalindrome(head);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

// User function Template for javascript

/**
 * @param {Node} node
 * @return {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    maxPalindrome(node) {
        if (!node) return 0;
        let values = [], curr = node;
        while (curr !== null) {
            values.push(curr.data);
            curr = curr.next;
        }
        let n = values.length, maxLength = 1;
        const expandAroundCenter = (left, right) => {
            while (left >= 0 && right < n && values[left] === values[right]) {
                maxLength = Math.max(maxLength, right - left + 1);
                left--;
                right++;
            }
        };
        for (let i = 0; i < n; i++) {
            expandAroundCenter(i, i);
            expandAroundCenter(i, i + 1);
        }
        return maxLength;
    }
}