class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        i = 0

        while i < len(nums):
            if nums[i] == val:
                j = i + 1
                while j < len(nums) and nums[j] == val:
                    j += 1
                if j >= len(nums):
                    return i
                nums[i] = nums[j]
                nums[j] = val
            i += 1
        
        return i
