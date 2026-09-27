class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        
        n = len(nums)
        
        # Phase 1: 
        # - check if 1 is not present 
        # - change negatives, zeros, and numbers greater that n + 1 to 1
        found_one = False
        for i in range(0, n):
            curr_num = nums[i]
            if curr_num == 1:
                found_one = True
            if curr_num <= 0 or curr_num > n:
                nums[i] = 1
        
        # Early return - 1 was not found
        if not found_one:
            return 1
        
        # Phase 2: marking
        for num in nums:
            index = abs(num) - 1
            nums[index] = abs(nums[index]) * -1

        # Phase 3: find missing
        for i in range(0, n):
            curr_num = nums[i]
            if curr_num > 0:
                return i + 1
        
        return n + 1