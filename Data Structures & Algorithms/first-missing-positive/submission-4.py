class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        
        unique_numbers = set(nums)
        target = 1

        while target in unique_numbers:
            target += 1
        
        return target