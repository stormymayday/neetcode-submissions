class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // length must be equal
        if(s.length !== t.length) {
            return false;
        }

        const hashMap = {};

        // filling in the hashMap using with chars from 's'
        for(let i = 0; i < s.length; i++) {
            // if char is not in the map
            if(hashMap[s[i]] === undefined) {
                // add it and set value to 1
                hashMap[s[i]] = 1;
            } else {
                // otherwise, increment value by 1
                hashMap[s[i]]++;
            }
        }

        // comparing with 't'
        for(let i = 0; i < t.length; i++) {
            // if char exists
            if(hashMap[t[i]] !== undefined) {
                // decrement the value by 1
                hashMap[t[i]]--;
                // if value becomes zero, delete the char
                if(hashMap[t[i]] === 0) {
                    delete hashMap[t[i]];
                }
            } else {
                // char is not in the map
                return false;
            }
        }

        return true;
    }
}
