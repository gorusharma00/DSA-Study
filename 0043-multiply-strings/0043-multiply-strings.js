/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
   
   num1 = BigInt(num1)
   num2 = BigInt(num2)
   let product = num1 * num2;
   return BigInt(product).toString();
};