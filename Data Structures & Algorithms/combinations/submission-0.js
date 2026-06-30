class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        return this.combineHelper(1, n, k);
    }
    
    combineHelper(start, n, k) {
        if (k === 0) {
            return [[]];
        }
        
        if (start > n || k > n - start + 1) {
            return [];
        }
        
        // Include current number (start)
        const combosWithStart = this.combineHelper(start + 1, n, k - 1);
        const combosIncludingStart = combosWithStart.map(combo => [start, ...combo]);
        
        // Exclude current number (start)
        const combosWithoutStart = this.combineHelper(start + 1, n, k);
        
        return [...combosIncludingStart, ...combosWithoutStart];
    }
}