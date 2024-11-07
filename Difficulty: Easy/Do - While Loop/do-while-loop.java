//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends
// User function Template for Java
class Solution {
    public static void doWhile(int n) {
        int count = Math.max(n, 1);
        do {
            System.out.println("Geeksforgeeks");
            count--;
        } while (count > 0);
    }
}

//{ Driver Code Starts.

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        while (tc-- > 0) {
            int n = sc.nextInt();
            Solution sln = new Solution();
            sln.doWhile(n);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends