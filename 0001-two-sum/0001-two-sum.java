class Solution {
    public int[] twoSum(int[] nums, int target) {
    //   for(int i=0; i<nums.length -1; i++){
    //       for(int j=i+1; j<nums.length; j++){
    //           if(nums[i] + nums[j] == target){
    //               return new int[]{i,j};
    //           }
    //       }
    //   } 
    //   return new int[]{};

    HashMap<Integer, Integer> map = new HashMap<>();

    for(int i=0; i<nums.length; i++){
        int n = nums[i];
        if(map.containsKey(target - n)){
            return new int[]{map.get(target -n), i};
        }else{
            map.put(n, i);
        }
    }
    return new int[]{};
    }
}