/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let s1 = updateString(s);
    let s2 = updateString(t);

    return s1 == s2;
};

function updateString(s){
    let newString = "";
     let skip = 0; // To keep track of backspaces
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '#') {
            skip++;
        } else if (skip > 0) {
            skip--;
        } else {
            newString = s[i] + newString;
        }
    }
    return newString;
}
