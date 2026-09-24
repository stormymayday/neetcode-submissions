class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        
        hash_set = set(nums)

        target = 1

        for i in range(0, len(nums)):
            if target not in hash_set:
                return target
            else:
                target += 1

        return target