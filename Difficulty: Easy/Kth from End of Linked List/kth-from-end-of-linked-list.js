//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' '));
}

const readline = require('readline');
const rl = readline.createInterface(
    {input : process.stdin, output : process.stdout, terminal : false});

let input = [];
rl.on('line', (line) => { input.push(line); });

rl.on('close', () => {
    let t = parseInt(input[0].trim());
    let idx = 1;

    while (t > 0) {
        let arr = input[idx].trim().split(/\s+/).map(Number);
        let x = parseInt(input[idx + 1].trim());
        idx += 2;
        let head = null;
        if (arr.length > 0 && arr[0] !== 0) {
            head = new Node(arr[0]);
            let tail = head;
            for (let i = 1; i < arr.length; i++) {
                tail.next = new Node(arr[i]);
                tail = tail.next;
            }
        }

        let obj = new Solution();
        let res = obj.getKthFromLast(head, x);
        console.log(res);
        t--;
    }
});

// } Driver Code Ends


/* class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}*/

/**
 * @param Node head
 * @param number k
 * @returns number
 */

class Solution {
    getKthFromLast(head, k) {
        let first = head, second = head;
        for (let i = 0; i < k; i++) {
            if (first === null) return -1;
            first = first.next;
        }
        while (first !== null) {
            first = first.next;
            second = second.next;
        }
        return second ? second.data : -1;
    }
}
