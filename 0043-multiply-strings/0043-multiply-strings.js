/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
   /*
   num1 = BigInt(num1)
   num2 = BigInt(num2)
   let product = num1 * num2;
   return BigInt(product).toString();
   */

    if(!num1 || !num2){       
        return "0";   
    } 

   if(num1 === "0" || num2 === "0") return "0";

   let n = num2.length;
   let m = num1.length;
   let result = new Array(n+m).fill(0);
   let pf = 0;

   for(let i=n-1; i>=0; i--){
       let ival = parseInt(num2[i])

       let k = result.length -1 -pf;
       let carry = 0;
       for(let j=m-1; j>=0; j--){
           let jval = parseInt(num1[j]);
           let prodcut = ival * jval + carry +  result[k];
           result[k] = prodcut %10;
           carry = Math.floor(prodcut /10);
           k--;
       }
       if(carry>0){
           result[k] += carry;
       }
       pf++;
   }
    if (result.join('') !== '0') {
        while (result[0] === 0) {
            result.shift();
        }
    }
    return result.join('');
    
};