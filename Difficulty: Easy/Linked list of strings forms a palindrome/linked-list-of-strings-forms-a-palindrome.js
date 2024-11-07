//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

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
    while (head) {
        s += head.data;
        s += " ";
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ");
        let list = new Node(arr[0]);
        let tail = list;
        for (let j = 1; j < n; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.compute(list);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends


// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {boolean}
 */

class Solution {
    isPalindrome(str) {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    
    compute(head) {
        let combinedStr = '', curr = head;
        while (curr !== null) {
            combinedStr += curr.data;
            curr = curr.next;
        }
        return this.isPalindrome(combinedStr);
    }
}
