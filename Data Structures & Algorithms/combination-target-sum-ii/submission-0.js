class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const n = candidates.length;
        const sorted = candidates.sort((a, b) => a - b);
        const res = [];
        const combo = [];
        let curSum = 0;
        function helper(index) {
            if(curSum === target) {
                res.push([...combo]);
                return;
            }
            if(curSum > target || index === n) {
                return;
            }

            // Include
            combo.push(sorted[index]);
            curSum += sorted[index];
            helper(index + 1); // don't move

            // Backtrack
            combo.pop();
            curSum -= sorted[index];

            // Exclude (skipping all)
            while(index + 1 < n && sorted[index] === sorted[index + 1]) {
                index += 1;
            }
            helper(index + 1);
        }
        helper(0);
        return res;
    }
}
