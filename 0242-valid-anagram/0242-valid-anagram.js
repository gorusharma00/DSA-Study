/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const frequency_map = {};

    for(let i =0; i<s.length; i++){
        if(frequency_map[s[i]]){
            //if it is defined
            frequency_map[s[i]] +=1
        }else{
            //if it is not defined
            frequency_map[s[i]] = 1
        }
    }

    for(let i=0; i<t.length; i++){
        if(frequency_map[t[i]] === undefined){
            return false;
        }else{
            frequency_map[t[i]] -= 1;
            if(frequency_map[t[i]] ==0){
                delete frequency_map[t[i]];
            }
        }
    }

    return Object.keys(frequency_map).length == 0;
};