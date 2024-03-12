class Solution {
    public int minimumOperations(int[] nums) {
        /*
        HashSet<Integer> a=new HashSet<Integer>();
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0)
                continue;
            a.add(nums[i]);
        }
        return a.size();
        */
        int res =0;
        for(int i=0; i<nums.length; i++){
            if(!check(nums)){
                res++;
            }else{
                break;
            }
            int small = smallest(nums);
            for(int j=0; j<nums.length; j++){
                if(nums[j] != 0){
                    nums[j] = nums[j] - small;
                }
            }
        }
        return res;
    }

    public static boolean check(int[] nums){
        for(int i=0; i<nums.length; i++){
            if(nums[i] != 0) return false;
        }
        return true;
    }

    public static int smallest(int[] nums){
        int min = Integer.MAX_VALUE;
        for(int i=0; i<nums.length; i++){
            if(nums[i] > 0){
                min = Math.min(nums[i], min);
            }
        }
        return min;
    }
}