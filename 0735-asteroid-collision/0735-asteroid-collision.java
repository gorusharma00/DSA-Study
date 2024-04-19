class Solution {
    public int[] asteroidCollision(int[] a) {
        Stack<Integer> st = new Stack<>();
        int i = 0;

        while(i < a.length){
            if(st.isEmpty()){
                st.push(a[i]);
                i++;
            }else{
                if(st.peek() > 0 && a[i] < 0){
                    // only condition of collision
                    if(Math.abs(st.peek()) == Math.abs(a[i])){
                        st.pop();
                        i++;
                    }else{
                        // if size is not same
                        if(Math.abs(st.peek()) > Math.abs(a[i])){
                            i++;
                        }else{
                            while(!st.isEmpty() && Math.abs(st.peek()) < Math.abs(a[i])){
                                st.pop();
                            }
                        }
                    }

                }else{
                    st.push(a[i]);
                    i++;
                }

            }
        }

        int[] result = new int[st.size()];
        for(int idx = result.length -1; idx >= 0; idx--){
            result[idx] = st.peek();
            st.pop();
        }
        return result;

    }
}

//time complexity => o(n);