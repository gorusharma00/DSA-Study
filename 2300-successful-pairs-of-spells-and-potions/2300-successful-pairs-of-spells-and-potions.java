class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        Arrays.sort(potions);
        // it can also be solved with out taking new array and by alter spells 
        // time complexity => O(mlogm + nlogm)
        int[] result = new int[spells.length];
        for(int i=0; i<spells.length; i++){
            int lo = 0;
            int hi = potions.length -1;
            long x = spells[i];
            while(lo<=hi){
                int mid = lo + (hi-lo)/2;
                if(x * potions[mid] >= success){
                    hi = mid -1;
                }else{     
                    lo = mid+1;
                }
            }
            result[i] = potions.length - lo;
        }
        return result;

    }
}