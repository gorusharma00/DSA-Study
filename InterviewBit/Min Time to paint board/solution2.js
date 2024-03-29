module.exports = { 
    //param A : integer
    //param B : integer
    //param C : array of integers
    //return an integer
       paint : function(A, B, C){
           let total_time = 0;
           let max_time = -1;
           
           for(let i = 0; i < C.length; i++){
               total_time += C[i] * B;
               max_time = Math.max(max_time, C[i] * B);
           }
           
           // if(A == 1) return total_time %  10000003;
           // if(A>=C.length) return max_time %  10000003;
           
           let lo = max_time;
           let hi = total_time;
           let ans = hi;
           
           while(lo<=hi){
               let mid = lo + Math.floor((hi-lo)/2);
               
               if(this.isPossible(C, A, B , mid)){
                   ans = mid;
                   hi = mid -1;
               }else{
                   lo = mid +1
               }
           }
           return ans % 10000003;
       },
       
       isPossible: function(C, A, B, mid){
           let painter = 1;
           let time = 0;
           
           for(let i=0; i< C.length; i++){
               time += C[i] * B;
               
               if(time > mid){
                   painter++;
                   time = C[i] * B;
               }
               
               if(painter > A){
                   return false;
               }
           }
           
           return true;
           
       }
         
       
   };
   