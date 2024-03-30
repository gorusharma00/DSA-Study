/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let lo = 1;
    let hi = Math.max(...piles);
    let ans = 1;

    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(canEatAllBananasInMidSpeed(piles, mid, h)){
            ans = mid;
            hi = mid-1;
        }else{
            lo = mid+1;
        }
    }
    return ans;
};

function canEatAllBananasInMidSpeed(piles, mid, h){
    let totalHours = 0;
    for(let i of piles){
        totalHours += Math.ceil(i/mid);
    }

    return totalHours <= h;
}