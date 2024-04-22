/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare= function(s, t) {
    let i = s.length - 1, j = t.length - 1;

    while (i >= 0 || j >= 0) {
        let backspaceCount = 0;

        // Process backspaces in s
        while (i >= 0 && (s[i] === '#' || backspaceCount > 0)) {
            if (s[i] === '#') {
                backspaceCount++;
            } else {
                backspaceCount--;
            }
            i--;
        }

        backspaceCount = 0;
        // Process backspaces in t
        while (j >= 0 && (t[j] === '#' || backspaceCount > 0)) {
            if (t[j] === '#') {
                backspaceCount++;
            } else {
                backspaceCount--;
            }
            j--;
        }

        // If both characters are not the same or one is undefined, return false
        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }
        if ((i >= 0) !== (j >= 0)) {
            // If one string is finished and the other is not
            return false;
        }
        i--;
        j--;
    }

    return true;
}
