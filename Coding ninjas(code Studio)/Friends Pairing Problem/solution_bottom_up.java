import java.util.* ;
import java.io.*; 
public class Solution {
    public static long mod = 1000000007;

    public static long pair(int i){
        long[] dp = new long[100005];
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;


        for(int j=3; j<=i; j++){
            dp[j] = (dp[j-1] + (j-1) * dp[j-2]) % mod;
        }

        return dp[i];
    }

    public static int numberOfWays(int n) {
        // Write your code here.
        return (int)pair(n);
    }
}
