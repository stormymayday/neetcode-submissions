class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }

        const frequencyMap = {};

        for(const char of s) {
            if(frequencyMap[char] === undefined) {
                frequencyMap[char] = 1;
            } else {
                frequencyMap[char]++;
            }
        }

        for(const char of t) {
            if(frequencyMap[char] === undefined) {
                return false;
            } else {
                frequencyMap[char]--;
                if(frequencyMap[char]=== 0) {
                    delete frequencyMap[char];
                }
            }
        }
        return true;
    }
}
