function selection_sort(arr){
    let n = arr.length;

    for(let i =0; i< n-1; i++){
        let min_idx = findMinElement(arr, i);
        if(min_idx != i){
            let temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}


function findMinElement(arr, i){
    let min_idx_el = i;
    for(let j = i+1; j < arr.length; j++){
        if(arr[j] < arr[min_idx_el]){
            min_idx_el = j;
        }
    }
    return min_idx_el;
}


const arr = [9,1,0,6,-2,4,8,10]

selection_sort(arr);

console.log(arr)