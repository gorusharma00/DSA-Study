function sort(arr){
    let n = arr.length;
    for(let i=0; i< n; i++){
        let isSwapped = false;
        for(let j=0; j< n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) return;
    }
}


const arr = [4,5,-1,0,10,9,6]

sort(arr)
console.log(arr)