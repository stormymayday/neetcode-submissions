class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        val_to_idx = {}

        for i in range(len(nums)):
            curr_val = nums[i]
            diff = target - curr_val
            if diff in val_to_idx:
                return [val_to_idx[diff], i]
            val_to_idx[curr_val] = i
            
        return [-1, -1]