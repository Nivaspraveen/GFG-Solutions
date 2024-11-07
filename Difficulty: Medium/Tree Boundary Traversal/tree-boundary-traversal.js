//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  // Corner Case
  if (str.length === 0 || str[0] === "N") return null;

  // Create the root of the tree
  let root = new Node(parseInt(str[0]));

  // Push the root to the queue
  let queue = [];
  let start = 0;
  queue.push(root);

  // Starting from the second element
  let i = 1;
  while (queue.length !== start && i < str.length) {
    // Get and remove the front of the queue
    let currNode = queue[start];
    start++;

    // Get the current node's value from the string
    let currVal = str[i];

    // If the left child is not null
    if (currVal !== "N") {
      // Create the left child for the current node
      currNode.left = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.left);
    }

    // For the right child
    i++;
    if (i >= str.length) break;
    currVal = str[i];

    // If the right child is not null
    if (currVal !== "N") {
      // Create the right child for the current node
      currNode.right = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.right);
    }
    i++;
  }

  return root;
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s_tree = readLine().trim().split(" ");
    let root = buildTree(s_tree);
    let obj = new Solution();
    let res = obj.boundary(root);
    let s = "";
    for (let i = 0; i < res.length; i++) {
      s += res[i] + " ";
    }
    console.log(s);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
    boundary(root) {
        if (!root) return [];
        const result = [];
        if (!this.isLeaf(root)) result.push(root.data);
        this.addLeftBoundary(root, result);
        this.addLeaves(root, result);
        this.addRightBoundary(root, result);
        return result;
    }
    
    isLeaf(node) {
        return !node.left && !node.right;
    }
    
    addLeftBoundary(node, result) {
        let curr = node.left;
        while (curr) {
            if(!this.isLeaf(curr)) result.push(curr.data);
            curr = curr.left ? curr.left : curr.right;
        }
    }
    
    addLeaves(node, result) {
        if (this.isLeaf(node)) result.push(node.data);
        else {
            if (node.left) this.addLeaves(node.left, result);
            if (node.right) this.addLeaves(node.right, result);
        }
    }
    
    addRightBoundary(node, result) {
        let stack = [], curr = node.right;
        while (curr) {
            if (!this.isLeaf(curr)) stack.push(curr.data);
            curr = curr.right ? curr.right : curr.left;
        }
        while (stack.length > 0) result.push(stack.pop());
    }
}