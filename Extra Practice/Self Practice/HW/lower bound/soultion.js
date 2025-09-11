function binary_find(arr, x){
    let low = 0;
    let high = arr.length -1;
    let ans = arr.length
    while(low<= high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] < x){
            low = mid + 1;
        }else{
            ans = mid;
            high = mid -1;
        }
    }
    return ans;
}




const arr = [1,1,1,1,1,2,2,3,4,4,4,4,4,5]

console.log(binary_find(arr, 2))
