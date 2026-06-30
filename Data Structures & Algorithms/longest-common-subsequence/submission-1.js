class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2, p1 = 0, p2 = 0, memo = {}) {

        const key = `${p1},${p2}`;

        if(key in memo) {
            return memo[key];
        }

        if(p1 === text1.length || p2 === text2.length) {
            return 0;
        }

        if(text1[p1] === text2[p2]) {
            memo[key] = 1 + this.longestCommonSubsequence(text1, text2, p1 + 1, p2 + 1, memo);
        } else {
            const moveP1 = this.longestCommonSubsequence(text1, text2, p1 + 1, p2, memo);
            const moveP2 = this.longestCommonSubsequence(text1, text2, p1, p2 + 1, memo);
            memo[key] = Math.max(moveP1, moveP2);
        }

        return memo[key];
    }
}
