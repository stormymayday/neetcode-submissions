class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        i = 0

        while i < len(nums):
            if nums[i] == val:
                j = i + 1
                if j >= len(nums):
                    return i
                while j < len(nums):
                    if nums[j] != val:
                        nums[i] = nums[j]
                        nums[j] = val
                        break
                    j += 1
                if j == len(nums):
                    return i
            i += 1
        
        return i
