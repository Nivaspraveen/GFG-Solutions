//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
class Bits{
    public static void main(String[] arsg)throws IOException{
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        int t=Integer.parseInt(br.readLine());
        while(t-->0){
            long n=Long.parseLong(br.readLine());
            GfG g=new GfG();
            g.count(n);
        
System.out.println("~");
}
    }
}


// } Driver Code Ends
//User function Template for Java

class GfG{
    public void count(long n){
        long setBits = 0, temp = n;
        while (temp > 0) {
            setBits += (temp & 1);
            temp >>= 1;
        }
        long totalBits = (long)(Math.log(n) / Math.log(2)) + 1;
        long nonSetBits = totalBits - setBits;
        
        System.out.println(setBits + " " + nonSetBits);
    }
}

//{ Driver Code Starts.

// } Driver Code Ends