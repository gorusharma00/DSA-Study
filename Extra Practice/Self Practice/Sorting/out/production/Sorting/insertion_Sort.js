function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let element = arr[i];
        let j;
        for(j = i - 1; j>=0; j--){
            if(arr[j] > element){
                arr[j+1] = arr[j];
            }else{
                break;
            }
        }
        arr[j+1] = element;
    }
}





const arr = [1,2,3,4]
insertionSort(arr)

console.log(arr);
