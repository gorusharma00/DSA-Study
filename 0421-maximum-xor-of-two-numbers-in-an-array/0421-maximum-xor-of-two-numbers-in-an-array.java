class Solution {
    public static class trieNode{
        trieNode left;
        trieNode right;
    }

    public static void insert(trieNode root, int num){
        trieNode curr = root;

        for(int i = 31; i >= 0; i--){
            int ith_bit = (num >> i) & 1;
            
            if(ith_bit == 0){ // left
                if(curr.left == null){
                    curr.left = new trieNode();
                }
                curr = curr.left;
            }else{
                if(curr.right == null){
                    curr.right = new trieNode();
                }
                curr = curr.right;
            }
        }
    }

    public static int findMaxXor(trieNode root, int num){
        int maxXor = 0;
        trieNode curr = root;

        for(int i = 31; i >= 0; i--){
            int ith_bit = (num >> i) & 1;

            if(ith_bit == 1){ // 1 means we need 0 for it go left

                if(curr.left != null){ // 1 ^ 0 = 1
                    maxXor += Math.pow(2, i);
                    curr = curr.left;
                }else{ // 1 ^ 1 = 0 // bcoz we dont have left
                    curr = curr.right;
                }
            }else{ // 0 means we need 1 for it go right

                if(curr.right != null){
                    maxXor += Math.pow(2, i);
                    curr = curr.right;
                }else{
                    // maxXor = math.pow(2, i) * 0 = 0 because left means 0;
                    curr = curr.left;
                }
            }
        }

        return maxXor;
    }

    public int findMaximumXOR(int[] nums) {
        trieNode root = new trieNode();

        for(int num : nums){
            insert(root, num);
        }

        int maxResult = 0;

        for(int i = 0; i < nums.length; i++){
            int temp = findMaxXor(root, nums[i]);
            
            maxResult = Math.max(maxResult, temp);
        }

        return maxResult;
    }
}