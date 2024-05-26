/**
 * @param {number[]} nums
 * @return {number}
 */
let mod = BigInt(1e9 + 7);
let pascal_tri;

function f(nums){
    let n = nums.length;
    if(n < 3) return 1; // edge case

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
    let z = BigInt(pascal_tri[n-1][left_arr.length]);      // nCr => (n-1)C(left_arr.size) or it can be right_arr.size also

    return (((x * y) % mod * z) ) % mod;
}

var numOfWays = function(nums) {
    let n = nums.length;
    pascal_tri = new Array(n);

    for(let i = 0; i < n; i++){
        pascal_tri[i] = new Array( i + 1).fill(1n);

        for(let j = 1; j < i; j++){
            // j starts from 1 as in PT one col will be 1 same with j < 1
            pascal_tri[i][j] = (pascal_tri[i-1][j] + pascal_tri[i-1][j-1]) % mod; // this one is diagonally
        }
    }

    let ans = BigInt(f(nums));

    return (ans - 1n) % mod;  // subtract 1 because exclude the orignal arrangement
};

// TC => o(n * n) in worst case depth of tree will be of n size and we also run loop for n times
// SC => o(n * n) // 2d pascal aray