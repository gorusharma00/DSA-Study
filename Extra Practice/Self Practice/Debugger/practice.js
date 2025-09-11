var reverseWords = function(s) {
    let str = "";
    let i = 0;

    while(i < s.length){
        if(s[i] !== " "){
            let temp = "";
            while(s[i] !== " "){
                temp = temp + s[i];
                i++; 
            }
            str = temp + " " + str;
        }
        i++;
    }
    return str;
};

let ans = reverseWords('the sky is blue');
console.log(ans);