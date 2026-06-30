class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Object to store groups of anagrams with character frequency arrays as keys
        const result = {};

        // Iterate through each string in the input array
        for(const s of strs) {
            // Create a frequency array for the 26 lowercase English letters
            // Initialize all counts to 0
            const chars = new Array(26).fill(0);

            // Increment the count for each character in the string
            for(const char of s) {
                // Convert character to its corresponding index (0-25)
                // by subtracting the ASCII value of 'a'
                chars[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            // Create a key by joining the frequency array with commas
            // Anagrams will have identical frequency arrays
            const key = chars.join(',');

            // If this is the first time we've seen this character pattern,
            // initialize an empty array for this group
            if(result[key] === undefined) {
                result[key] = [];
            }
            
            // Add the original string to its anagram group
            result[key].push(s);
        }

        // Return all the anagram groups as an array of arrays
        return Object.values(result);
    }
}
