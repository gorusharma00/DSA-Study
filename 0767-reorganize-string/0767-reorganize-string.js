/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let map = {}
    let maxfreq = 0;
    let maxfreqCh;

    for(let i = 0; i < s.length; i++){
        let ch = s[i];
        if(map[ch]){
            map[ch] += 1;
        }else{
            map[ch] = 1;
        }
        if(map[ch] > maxfreq){
            maxfreq = map[ch];
            maxfreqCh = ch;
        }
        if(map[ch] > Math.floor((s.length + 1)/ 2) ){
            return "";
        }
    }

    let result = new Array(s.length);
    let i = 0
    while(maxfreq > 0){
        result[i] = maxfreqCh;
        map[maxfreqCh]--;
        i += 2;
        maxfreq--;
    }
    
    for(let ch in map){

        while(map[ch] > 0){
            if(i >= s.length){
                i = 1;
            }
            result[i] = ch;
            i+= 2;
            map[ch]--;
        }
    }

    return result.join('');
};