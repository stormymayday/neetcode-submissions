class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Map to store sequence lengths
        const mp = new Map();
        // Result to track longest sequence
        let res = 0;
        
        for (let num of nums) {
            // Only process each number once
            if (!mp.has(num)) {
                // Calculate the length of the sequence including this number
                mp.set(num, (mp.get(num - 1) || 0) + (mp.get(num + 1) || 0) + 1);
                
                // Update the length at the left boundary of the sequence
                mp.set(num - (mp.get(num - 1) || 0), mp.get(num));
                
                // Update the length at the right boundary of the sequence
                mp.set(num + (mp.get(num + 1) || 0), mp.get(num));
                
                // Update the result with the maximum sequence length
                res = Math.max(res, mp.get(num));
            }
        }
        
        return res;
    }
}