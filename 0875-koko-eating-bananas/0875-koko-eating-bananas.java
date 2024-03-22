class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int lo = 1;
        int hi = 0;
        for(int i : piles){
            hi = Math.max(i, hi);
        }

        int ans = hi;

        while(lo<=hi){
            int mid = lo + (hi-lo)/2;

            if(canEatAllBananasInMidSpeed(piles, mid, h)){
                ans = mid;
                hi = mid-1;
            }else{
                lo = mid+1;
            }
        }
        return ans;
    }
    public static boolean canEatAllBananasInMidSpeed(int[] piles, int mid, int h){
        int totalHours = 0;
        for(int i=0; i<piles.length; i++){
            totalHours += Math.ceil( (double) piles[i]/mid);
        }

        return totalHours <= h;
    }
}
