function bubbleSort(arr, i, count){
   if(count == arr.length) return;

   if(i == arr.length - 1){
        return bubbleSort(arr, 0, count+1);
   }

   if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
   }

   return bubbleSort(arr, i + 1, count);

}

let arr =  [-1,-10, 50,20,2,3,54,32,-3];

bubbleSort(arr, 0, 0)

console.log(arr);