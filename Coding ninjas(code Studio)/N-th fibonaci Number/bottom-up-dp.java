import java.util.* ;
import java.io.*; 
public class Solution{
    public static int[] dp;
    public static int mod = 1000000007;

    public static int fibo(int n){
        dp[0] = 0;
        dp[1] = 1;
        for(int i=2; i<=n; i++){
            dp[i] = (dp[i-1] + dp[i-2]) % mod;
        }
        return dp[n];
    }
    public static int fibonacciNumber(int n){
        // Write your code here.
        dp = new int[100005];
        return fibo(n);
    }
}