function binarySearch(arr, p){
    let low = 0;
    let high = arr.length -1;
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] == p){
            return mid;
        }else if(arr[mid] < p){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}


const arr = [1,4,9,15,19,25,29,40]

let p = 4;
const result = binarySearch(arr, p)

console.log(result);

/*
time complexity = O(logn)
space complexity = O(n)
*/

