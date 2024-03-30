/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ')
    // let res = [];
    // for(let i=s.length-1; i>=0; i--){
    //     if(s[i] != ""){
    //         res.push(s[i])
    //     }
    // }
    // return res.join(' ')

    let str = ""

    for(let i=s.length-1; i>=0; i--){
        if(s[i] == "") continue;
        if(str.length>0) str += " "
        str += s[i]
    }
    return str;
};