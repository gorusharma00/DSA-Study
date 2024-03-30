/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    // time complexity => o(n log(sum of weights))
    let totalWeight = 0;
    let maxWeight = -1;
    for(let i=0; i<weights.length; i++){
        totalWeight += weights[i];
        maxWeight = Math.max(maxWeight, weights[i]);
    }

    let lo = maxWeight, hi = totalWeight;
    let ans = hi;
    while(lo<=hi){
        let mid = lo+ Math.floor((hi-lo)/2);
        if(canShip_WithMidWeight(weights,mid, days)){
            ans = mid;
            hi = mid-1;
        }else{
            lo = mid+1;
        }
    }
    return ans;
};

function canShip_WithMidWeight(weights, mid, days){
    let daysCount = 0;
    let tw = 0;

    for(let i=0; i<weights.length; i++){
        if(tw + weights[i] > mid){
            daysCount++;
            tw = 0
        }
        tw += weights[i];
    }

    daysCount++;
    return daysCount <= days;
}