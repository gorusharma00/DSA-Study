/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    /* by self but passed only sample case
    const map = {};
    let result = [];

    for(let i=0; i<strs.length; i++){
        map[strs[i]] = strs[i].split("").sort().join("")
    }

    const grouped = {};
    for(let [key, value] of Object.entries(map)){
        if(value in grouped){
            grouped[value].push(key);
        }else{
            grouped[value] = [key];
        }
    }

    Object.values(grouped).forEach(element => {
        result.push(element);
    })

    return result;

    */

    const map = {};

    for(const str of strs){
        const sorted_str = str.split("").sort().join("")
        if(!map[sorted_str]){
            map[sorted_str] = [];
        }
        map[sorted_str].push(str);
    }
    return Object.values(map);
};