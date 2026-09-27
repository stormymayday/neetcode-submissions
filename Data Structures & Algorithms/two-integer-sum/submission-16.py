class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        num_to_idx = {}

        for idx, num in enumerate(nums):
            diff = target - num
            if diff in num_to_idx:
                return [num_to_idx.get(diff), idx]
            num_to_idx[num] = idx

        return [-1, -1]