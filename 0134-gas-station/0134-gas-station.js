/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;


    let totalKamai = gas.reduce((acc, curr) => acc + curr, 0);
    let totalKharch = cost.reduce((acc, curr) => acc + curr, 0);

    if(totalKamai < totalKharch){   // means answer never exist;
        return -1;
    }   

    let total = 0;  // means no gas now
    let result_index = 0; // i will store i in that, and finally it stores i that gives answer,
                    // if i that i stored earlier give wrong answer i will 
                    // update it with i+1

    for(let i = 0; i < n; i++){
        total += gas[i] - cost[i];

        if(total < 0){  // case where we don't have enough gas to go next station
            total = 0; 
            result_index = i + 1;  
        }
    }

    return result_index;
};