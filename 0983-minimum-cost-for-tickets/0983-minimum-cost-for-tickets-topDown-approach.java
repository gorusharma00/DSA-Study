class Solution {
    public static int[] c;
    public static int last_day;
    public static HashSet<Integer> s;
    public static int[] dp;

    public static int f(int day){
        if( day > last_day) return 0;
        if(!s.contains(day)) return f(day+1);

        if(dp[day] != -1) return dp[day];

        int a = Math.min(c[0] + f(day +1), c[1] + f(day +7));
        int ans = Math.min(a, c[2] + f(day + 30));
        return dp[day] = ans;
    }

    public int mincostTickets(int[] days, int[] costs) {
        s = new HashSet<Integer>();
        for(int day : days){
            s.add(day);
        }

        dp = new int[400];
        Arrays.fill(dp, -1);
        
        c = costs;
        last_day = days[days.length - 1];
        int ans = f(1);
        return ans;
    }
}