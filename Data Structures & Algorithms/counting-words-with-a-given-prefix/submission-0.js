class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {

        let count = 0;

        for(const word of words) {
            if(this.isPrefixOf(pref, word) === true) {
                count +=1;
            }
        }

        return count;

    }

    isPrefixOf(prefix, word) {
        if(prefix.length > word.length) {
            return false;
        }
        for(let i = 0; i < prefix.length; i += 1) {
            if(prefix[i] !== word[i]) {
                return false;
            }
        }
        return true;
    }
}
