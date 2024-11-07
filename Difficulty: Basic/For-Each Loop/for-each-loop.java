//{ Driver Code Starts
// Initial Template for Java
import java.util.*;


// } Driver Code Ends
// User function Template for Java
class Solution {
    public static void forEach(String arr[]) {
        for (String str : arr) System.out.println(str);
    }
}

//{ Driver Code Starts.
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        sc.nextLine();
        while (tc-- > 0) {
            String arr[] = sc.nextLine().split(" ");
            Solution sln = new Solution();
            sln.forEach(arr);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends