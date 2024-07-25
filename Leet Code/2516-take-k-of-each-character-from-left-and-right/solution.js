/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    let a = 0, b = 0, c = 0;

    // Count the occurrences of 'a', 'b', and 'c'
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'a'){
            a++;
        }else if(s[i] == 'b'){
            b++;
        }else{
            c++;
        }
    }

     // Check if there are at least k occurrences of each character
    a = a - k;
    b = b - k;
    c = c - k;

    if(a == 0 && b == 0 && c == 0) return s.length;
    if(a < 0 || b < 0 || c < 0) return -1;

    let ans = 0;
    let j = 0;
    let pa = 0;
    let pb = 0;
    let pc = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'a'){
            pa++;
        }else if(s[i] == 'b'){
            pb++;
        }else{
            pc++;
        }

        while(pa > a){
            if(s[j] == 'a') pa--;
            else if(s[j] == 'b') pb--;
            else pc--;
            j++;
        }

        while(pb > b){
            if(s[j] == 'b') pb--;
            else if(s[j] == 'c') pc--;
            else pa--;
            j++;
        }

        while(pc > c){
            if(s[j] == 'c') pc--;
            else if(s[j] == 'b') pb--;
            else pa--;
            j++;
        }

        ans = Math.max(ans, i - j + 1);
    }

    return s.length - ans;
};