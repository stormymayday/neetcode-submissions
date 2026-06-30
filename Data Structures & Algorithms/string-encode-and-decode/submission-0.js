class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(const string of strs) {
            result += String(string.length) + '#' + string;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while(i < str.length) {
            // Find the delimiter
            let j = i;
            while(str[j] !== '#') {
                j += 1;
            }

            // Parse the length
            const length = parseInt(str.slice(i, j));

            // Extract the string
            result.push(str.slice(j + 1, j + 1 + length));

            // Update index for next iteration
            i = j + 1 + length;
        }
        
        return result;
    }
}