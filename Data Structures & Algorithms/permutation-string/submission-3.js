class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // If s1 is longer than s2, no valid permutation can exist
        if (s1.length > s2.length) {
            return false;
        }

        // Sort s1 (all permutations will have this sorted character order)
        s1 = s1.split("").sort().join("");

        // Loop through s2 to check all substrings of length s1.length
        for (let i = 0; i <= s2.length - s1.length; i++) {
            // Extract a substring of length s1.length from s2
            let subStr = s2.slice(i, i + s1.length).split("").sort().join("");

            // If sorted substring matches sorted s1, return true
            if (s1 === subStr) {
                return true;
            }
        }

        // No valid permutation found
        return false;
    }
}
