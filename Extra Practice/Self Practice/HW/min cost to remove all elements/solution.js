function cost(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }

    arr.sort((x,y) => y-x);
    let min_cost = 0;

    for(let i=0; i<arr.length; i++){
        min_cost += sum;
        sum -= arr[i];
    }
    return min_cost;
}


const arr = [4,1,6]
console.log(cost(arr))