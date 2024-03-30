class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        // List<List<Integer>> result = new ArrayList<>();
        // for( int c =0; c<nums.length; c++){
        //     if(c == 0 || nums[c] != nums[c-1]){
        //         int i = c+1;
        //         int j = nums.length -1;
        //         while(i<j){
        //             if(nums[i] + nums[j] + nums[c] > 0){
        //                 j--;
        //             }else if(nums[i] + nums[j]+ nums[c] < 0){
        //                 i++;
        //             }else{
        //                 result.add(Arrays.asList(nums[c], nums[i], nums[j]));
        //                 while(i<j && nums[i] == nums[i+1]) i++;
        //                 while(i<j && nums[j] == nums[j-1]) j--;
        //                 i++;
        //                 j--;
        //             }
        //         }

        //     }
        // }
        // return result;

        HashMap<Integer, Integer> map = new HashMap<>();
        List<List<Integer>> result = new ArrayList<>();

        if (nums.length < 3) {
            return result;
        }

         if (nums[0] > 0) {
            return result;
        }

        for(int i=0;i<nums.length; i++){
                map.put(nums[i], i);
        }

        for(int i=0; i<nums.length-2; i++){
             if (nums[i] > 0) {
                break;
            }
            for(int j=i+1; j<nums.length-1; j++){
                int sum = -1 * (nums[i]+ nums[j]);
                if(map.containsKey(sum) && map.get(sum) > j){
                    result.add(Arrays.asList(nums[i], nums[j], sum));
                }
                j = map.get(nums[j]);
            }
            i = map.get(nums[i]);
        }
        return result;
    }
}