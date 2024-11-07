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

        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let x = parseInt(readLine());

        let obj = new Solution();
        let res = obj.findPair(arr, x);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends



class Solution {
    /**
     * @param number[] arr
     * * @param number x
     * @returns boolean
     */
    findPair(arr, x) {
      arr.sort((a, b) => a - b);
      let left = 0, right = 1;
      while (right < arr.length) {
          const diff = arr[right] - arr[left];
          if (diff === x && left !== right) return true;
          else if (diff < x) right++;
          else left++;
          if (left === right) right++;
      }
      return false;
    }
}
