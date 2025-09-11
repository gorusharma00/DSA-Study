/*  brute force approach
function minEatingSpeed(piles, h) {
    // Function to check if Koko can finish eating all bananas with a certain speed within h hours
    function canFinish(speed) {
        let hoursNeeded = 0;
        for (let pile of piles) {
            hoursNeeded += Math.ceil(pile / speed);
        }
        return hoursNeeded <= h;
    }

    // Start with the minimum possible speed
    let k = 1;
    // Increment k until we find the minimum speed that allows Koko to finish eating in time
    while (!canFinish(k)) {
        k++;
    }
    // Return the minimum speed found
    return k;
}

// Example usage
const piles = [3, 6, 7, 11];
const h = 8;
console.log(minEatingSpeed(piles, h)); // Output: 4

*/
