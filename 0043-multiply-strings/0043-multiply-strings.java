class Solution {
    public String multiply(String num1, String num2) {

        if(num1.equals("0") || num2.equals("0")) return "0";
        
        int n = num2.length();
        int m = num1.length();
        int[] result = new int[n+m];
        int pf =0;

        for(int i=n-1; i>=0; i--){
            int ival = num2.charAt(i) - '0';
            
            int k = result.length - pf - 1;
            int carry =0;
            for(int j=m-1; j>=0; j--){
                int jval = num1.charAt(j) - '0';
                int product = ival * jval + result[k] + carry;
                result[k] = product % 10;
                carry = product / 10;
                k--;
            }
            if(carry>0){
                result[k] += carry; 
            }
            pf++;
        }

        String str = "";
        boolean flag = false;
        for(int val: result){
            if(val == 0 && flag == false){
                continue;
            }else{
                flag = true;
                str += val;
            }
        }
        return str;

    }
}