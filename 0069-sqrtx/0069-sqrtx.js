/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    /*  ************** my approach ****************
    if(x==0){
        return 0;
    }
    if(x<=3){
        return 1;
    }
    let low = 2;
    let high = x;
    let ans =0;
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(mid * mid <= x){
            ans = mid;
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return ans;
    */

    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);
    let ans =0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (mid * mid <= x){
            ans = mid;
            left = mid+1;
        }
        // if (mid * mid < x) {
        //     left = mid + 1;
        // } 
        else {
            right = mid - 1;
        }
    }

    return ans;
};