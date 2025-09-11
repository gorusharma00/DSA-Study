function selection(arr, i, n){
    if(i == n){
        return;
    }
    let min_el_idx = minIdx(arr, i, n, i);
    let temp = arr[i];
    arr[i] = arr[min_el_idx];
    arr[min_el_idx] = temp;
    selection(arr, i+1, n);
}

function minIdx(arr, i, n, min){
    if(i == n){
        return min;
    }
    if(arr[i] < arr[min]){
        min = i;
    }
    return minIdx(arr, i+1, n, min);
}





const arr = [5,4,3,2,1]
let n = arr.length;
let i =0;
selection(arr,i,n)
console.log(arr);