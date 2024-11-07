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

        let n = parseInt(readLine());

        let obj = new Solution();
        let res = obj.fizzBuzz(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
        console.log("~");
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n

    * @returns string[]
    */
    fizzBuzz(n) {
        const result = [];
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
            else if (i % 3 === 0) result.push('Fizz');
            else if (i % 5 === 0) result.push('Buzz');
            else result.push(i.toString());
        }
        return result;
    }
}
