module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       books : function(A, B){
           if(A.length < B) return -1;
           let totalpages = 0;
           let maxpages = -1;
           for(let i=0; i<A.length; i++){
               totalpages += A[i];
               maxpages = Math.max(maxpages, A[i]);
           }
           
           let lo = maxpages;
           let hi = totalpages;
           let ans = -1;
           
           while(lo<=hi){
               let mid = lo + Math.floor((hi-lo)/2);
               
               if(allocate_pages(A, mid, B)){
                   ans = mid;
                   hi = mid -1;
               }else{
                   lo = mid+1;
               }
           }
           return ans;
       }
   };
   
   function allocate_pages(A, mid, B){
       let pagecount = 0;
       let book_allocate_student = 0
       for(let i=0; i< A.length; i++){
           if(pagecount + A[i] > mid){
               book_allocate_student++;
               pagecount = 0;
           }
           pagecount += A[i]
       }
       
       book_allocate_student++;
       return book_allocate_student <= B;
   }
   

   // time complexity => O(n * log(total no of pages))