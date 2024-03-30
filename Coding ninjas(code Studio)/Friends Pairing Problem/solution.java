import java.util.* ;
import java.io.*; 
public class Solution {
    public static long[] dp;
    public static long mod = 1000000007;

    public static long pair(int i){
        if(i ==0 || i== 1 || i == 2){
            return i;
        }

        if(dp[i] != -1) return dp[i];

        long single_ways = pair(i-1)%mod;
        long pair_ways = (i-1) % mod * pair(i -2) % mod;

        return dp[i] = (single_ways%mod + pair_ways%mod)%mod;
    }

    public static int numberOfWays(int n) {
        // Write your code here.

        dp = new long[100005];
        Arrays.fill(dp, -1);
        return (int)pair(n);
    }
}
