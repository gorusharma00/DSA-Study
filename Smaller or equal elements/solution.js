module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           let n = A.length;
           let low = 0;
           let high = n-1;
           let ans = n;
           while(low<=high){
               let mid = low + Math.floor((high-low)/2);
               if(A[mid] <= B){
                   low = mid+1;
               }else{
                   ans = mid;
                   high = mid -1;
               }
           }
           
           return ans;
       },
   };
   