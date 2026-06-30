class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        if(nums.length === 0) {
            return [[]];
        }

        const first = nums[0];
        const subsetsWithoutFirst = this.subsets(nums.slice(1));
        const subsetsWithFirst = [];
        for(const subset of subsetsWithoutFirst) {
            subsetsWithFirst.push([first, ...subset]);
        }
        
        return [...subsetsWithoutFirst, ...subsetsWithFirst];
    }
}
