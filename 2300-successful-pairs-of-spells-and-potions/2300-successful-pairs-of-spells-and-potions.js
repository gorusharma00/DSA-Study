/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    /* brute force   ** check java code for binary search approach; **
    let count = 0;
    for(let i=0; i<spells.length; i++){
        for(let j=0; j< potions.length; j++){
            if(spells[i] * potions[j] >= success){
                count++;
            }
        }
        spells[i] = count;
        count = 0;
    }
    return spells;
    */

    // two pointer approach; 

    let result = new Array(spells.length);

    for(let i=0; i<spells.length; i++){
        spells[i] = [spells[i], i];
    }

    spells.sort((x,y) => x[0]-y[0]);
    potions.sort((x,y) => x-y);

    
    let m = spells.length;
    let n = potions.length;

    for(let i=0; i<m; i++){
        let count = 0;
        let j = n-1;
        while(j>=0 && spells[i][0] * potions[j] >= success){
            j--;
        }
        count = n-(j+1);
        result[spells[i][1]] = count;
    }

    return result;
};

