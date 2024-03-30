import java.util.* ;
import java.io.*; 
public class Solution{
    public static long[] dp;
    public static int mod = 1000000007;

    public static int fibo(int n){
        if(n == 0 || n == 1) return n;
        if(dp[n] != -1) return (int) dp[n];
        return dp[n] = (fibo(n-1) + fibo(n-2) ) % mod;
    }
    public static int fibonacciNumber(int n){
        // Write your code here.
        dp = new long[100005];
        Arrays.fill(dp, -1);
        return  fibo(n);
    }
}