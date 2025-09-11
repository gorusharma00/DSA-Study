function quick_sort(arr, start, end){
    if(start<end){
        let pivot_idx = parition(arr, start, end)
        quick_sort(arr, start, pivot_idx -1);
        quick_sort(arr, pivot_idx+1, end);
    }
}

function parition(arr, start, end){
    let pivot_idx = Math.floor(Math.random() * (end - start ) + start);
    [arr[pivot_idx], arr[end]] = [arr[end], arr[pivot_idx]];
    let pivot_value = arr[end]
    let i=start;
    for(let j=start; j<end; j++){
        if(arr[j] < pivot_value){
            [arr[i], arr[j] ] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[end], arr[i]] = [arr[i], arr[end]]
    return i;
}


const arr = [9,6,3,1,4,8]
quick_sort(arr, 0, arr.length-1)
console.log(arr)