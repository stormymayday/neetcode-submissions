class Solution:
    def majorityElement(self, nums: List[int]) -> int:

        n = len(nums)

        if n == 0:
            return -1
        
        res = nums[0]
        count = 1

        for i in range(1, n):
            curr_num = nums[i]
            if curr_num != res:
                count -= 1
                if count == -1:
                    res = curr_num
                    count = 1
            else:
                count += 1

        return res