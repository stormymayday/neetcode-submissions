class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {};
        for(let i = 0; i < nums.length; i++) {
            const key = nums[i];
            if(hashMap[key] === undefined) {
                hashMap[key] = 1;
            } else {
                hashMap[key] += 1;
            }
        }

        const frequencyArray = Object.entries(hashMap);
        frequencyArray.sort((a,b) => {
            return b[1] - a[1];
        });

        const result = [];
        for(let i = 0; i < k; i++) {
            result.push(Number(frequencyArray[i][0]));
        }
        return result;
    }
}
