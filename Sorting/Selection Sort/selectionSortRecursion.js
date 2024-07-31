function selectionSort(arr, i, n){
    if(i === n){
        return;
    }

    let min_el_idx = findMinElement(arr, i, n, i);

    if(min_el_idx !== i){
        let temp = arr[min_el_idx];
        arr[min_el_idx] = arr[i];
        arr[i] = temp;
    }

    selectionSort(arr, i + 1, n);

}

function findMinElement(arr, start, end, min){
    if(start === end) return min;

    if(arr[start] < arr[min]){
        min = start;
    }

    return findMinElement(arr, start + 1, end, min);
}


let arr = [5,4,3,2,1,0,-9,-2,-4]

selectionSort(arr, 0, arr.length);

console.log(arr);



/*  selection sort using with one loop and recursion
function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i < arr.length;i++){
        let min_el_idx = findMinElement(arr, i, n, i);

        if(min_el_idx !== i){
            let temp = arr[i];
            arr[i] = arr[min_el_idx];
            arr[min_el_idx] = temp;
        }
    }
}


function findMinElement(arr, start, end,  min){
    if(start == end) return min;

    if(arr[min] > arr[start]){
        min = start;
    }

    return findMinElement(arr, start + 1, end,  min)
}
*/

