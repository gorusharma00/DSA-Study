class Solution {
    public static int[] dp;
    public static int last_day;
    public static int[] c;
    public static HashSet<Integer> s;

    public static int f_bu(){
        dp = new int[400];

        for(int day=365; day>= 1; day--){
            if(day > last_day) dp[day] = 0;
            else if(!s.contains(day)) dp[day] = dp[day+1];
            else{
                int ans = Math.min(c[0] + dp[day+1], Math.min(c[1] + dp[day+7], c[2] + dp[day+30]));
                dp[day] = ans;
            }       
        }
        return dp[1];
    }

    public int mincostTickets(int[] days, int[] costs) {
        c = costs;
        last_day = days[days.length -1]; 

        s = new HashSet<Integer>();
        for(int day : days){
            s.add(day);
        }

        return f_bu();

    }
}

//time complexity => o(1);