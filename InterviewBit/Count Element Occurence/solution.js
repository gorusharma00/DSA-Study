module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       findCount : function(A, B){
           let first_idx = this.lowerBound(A,B);
           let last_idx = this.upperBound(A,B);
           return last_idx - first_idx + 1;
       },
       
       upperBound : function(arr, x){
           let low =0;
           let high = arr.length -1;
           let last_index = arr.length;
           while(low<=high){
               let mid = low + Math.floor((high-low)/2);
               if(arr[mid] <= x){
                   low = mid+1
               }else{
                   last_index = mid;
                   high = mid -1;
               }
           }
           return last_index - 1;
       },
       
        lowerBound : function(arr, x){
           let low =0;
           let high = arr.length -1;
           let first_index = arr.length;
           while(low<=high){
               let mid = low + Math.floor((high-low)/2);
               if(arr[mid] < x){
                   low = mid+1
               }else{
                   first_index = mid;
                   high = mid -1;
               }
           }
           return first_index;
       }
   };
   