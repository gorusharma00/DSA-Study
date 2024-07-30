function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        let isSwap = false  // if array is sorted then we break out loop
        for(let j = 0; j < arr.length - i - 1; j++){ // because we don't need to go till last we need second last
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwap = true
            }
            if(isSwap === false) return;
        }
    }
}

let arr = [5,4,3,2,1]
bubbleSort(arr);
console.log(arr);

// time complexity for average case is => o(n) < average case <= o(n^2) which will take theta(n^2)
// for best case it is Ω(n) because of isSwap optimization we take