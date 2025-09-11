function bubble(arr, i, count){
    if(count == arr.length){
        return arr;
    }

    if(i == arr.length -1){
        i = 0;
        return bubble(arr, i , count+1)
    }

    if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp;
        return bubble(arr, i+1, count)
    }

    bubble(arr, i + 1, count);
    return arr;
}

let i =0, count=0;

let arr = [5,4,3,2,1]
bubble(arr, i, count)
console.log(arr);

