function mergeSort(arr){
    return mergeHelper(arr, 0, arr.length-1);
}

function mergeHelper(arr, start, end){
    if(start == end){
        let result = new Array(1);
        result[0] = arr[start];
        return result;
    }
    let mid = Math.floor((start+end) / 2);
    let left = mergeHelper(arr, start, mid)
    let right = mergeHelper(arr, mid+1, end)
    return merge(left, right);
}

function merge(left, right){
    let m = left.length;
    let n = right.length;
    let result = new Array(m+n);
    let i=0,j=0,k=0;
    while(i<m && j<n){
        if(left[i] < right[j]){
            result[k] = left[i];
            i++;
            k++;
        }else{
            result[k] = right[j];
            j++;
            k++;
        }
    }
    while(j<n){
        result[k] = right[j];
        j++;
        k++;
    }
    while(i<m){
        result[k] = left[i];
        i++;
        k++;
    }
    return result;
}


const arr = [-1,5,-4,-9,0,1,2,-5,-5,3];

const answer = mergeSort(arr);

console.log(answer);