// time complexity => o(n^2)

let arr = [-1,-10, 50,20,2,3,54,32,-3];

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){ // just go to last second element
        let min_el_idx = findMinEl(arr, i);

        if(min_el_idx !== i){
            // min elment and first el of unsorted region are diff then swap 
            let temp = arr[i];
            arr[i] = arr[min_el_idx];
            arr[min_el_idx] = temp;
        }
    }

}

function findMinEl(arr, i){
    let min_el_idx = i;
    
    for(let j = i + 1; j < arr.length; j++){
        if(arr[min_el_idx] > arr[j]){
            min_el_idx = j;
        }
    }

    return min_el_idx;

}

selectionSort(arr);
console.log(arr);