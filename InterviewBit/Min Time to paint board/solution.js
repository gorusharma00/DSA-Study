module.exports = { 
    //param A : integer
    //param B : integer
    //param C : array of integers
    //return an integer
       paint : function(A, B, C){
           if(C.length == 0) return 0;
           let sumofBoards = 0;
           let max = -1;
           
           for(let i=0; i< C.length; i++){
               sumofBoards += C[i];
               max = Math.max(max, C[i]);
           }
           
           if(A == 1) return (sumofBoards * B) % 10000003;
           if(A>= C.length) return (max * B) % 10000003;
           
           let lo = max;
           let hi = sumofBoards;
           let ans = A;
           
           while(lo<=hi){
               let mid = lo + Math.floor((hi-lo)/2);
               let requiredPainters = this.required_Painter(C, mid)
               if(requiredPainters <= A){
                   ans = mid;
                   hi = mid -1;
               }else{
                   lo = mid+1;
               }
           }
           return (ans * B) % 10000003;
       },
       
       required_Painter : function(C, mid){
           let total = 0;
           let painters = 1;
           
           for(let i=0; i< C.length; i++){
               total += C[i];
               if(total > mid){
                   total = C[i]
                   painters ++;
               }
           }
           return painters;
       },
   };
   