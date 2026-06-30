class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let result = 0;

        for(let i = 0; i < nums.length; i++) {

                let currentNum = nums[i];

                // let next = this.nextNumberExists(nums, currentNum);
                let streak = 0;

                while(this.nextNumberExists(nums, currentNum)) {
                    streak++;
                    currentNum++;
                }

                result = Math.max(result, streak);

        }

        return result;

    }

    nextNumberExists(arr, num) {

        for(let i = 0; i < arr.length; i++) {

            if(arr[i] === num) {
                return true;
            }

        }

        return false;

    }
}
