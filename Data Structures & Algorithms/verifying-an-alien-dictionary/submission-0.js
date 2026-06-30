class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {

        const charIndex = new Map();
        for(let i = 0; i < order.length; i += 1) {
            charIndex.set(order[i], i);
        }

        for(let i = 0; i < words.length - 1; i += 1) {
            const word1 = words[i];
            const word2 = words[i + 1];
            if(this.compare(word1, word2, charIndex) === false) {
                return false;
            }
        }

        return true;

    }

    compare(word1, word2, charIndex) {

        const n = Math.min(word1.length, word2.length);

        for(let i = 0; i < n; i += 1) {
            const char1 = word1[i];
            const char2 = word2[i];
            if(char1 !== char2) {
                // char2 should have larger index
                return charIndex.get(char1) < charIndex.get(char2);
            }
        }

        // If all characters matched, check length
        return word1.length < word2.length; // will return false if word1 is longer

    }
}
