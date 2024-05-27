/**
 * @param {number[]} nums
 * @return {number}
 */
let mod = BigInt(1e9 + 7);
function factorial(n){
    if(n == 0 || n == 1){
        return 1n;
    }

    let result = 1n;
    for(let i = 2; i <= n; i++){
        result *= BigInt(i);
    }
    return result;
}

function f(nums){
    let n = nums.length;
    if(n < 3) return 1n; // edge case

    let left_arr = [];
    let right_arr = [];

    let root = nums[0];

    for(let i = 1; i < n; i++){
        if(nums[i] < root){
            left_arr.push(nums[i]);
        }else{
            right_arr.push(nums[i]);
        }
    }

    let x = BigInt(f(left_arr));
    let y = BigInt(f(right_arr));
    let z = (factorial(n -1) / (factorial(left_arr.length) * factorial(n - 1 - left_arr.length))) % mod;      // nCr => (n-1)C(left_arr.size) or it can be right_arr.size also

    return (((x * y) % mod * z) % mod);
}

var numOfWays = function(nums) {
    let ans = BigInt(f(nums));

    return (ans - 1n) % mod;  // subtract 1 because exclude the orignal arrangement
};

// TC => o(n * n) in worst case depth of tree will be of n size and we also run loop for n times
// SC => o(n * n) // 2d pascal aray