class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        
        n = len(nums)

        res = [1] * n

        i = 1
        while i < n:
            res[i] = res[i - 1] * nums[i - 1]
            i += 1
        
        prod = 1
        i = n - 1
        while i >= 0:
            prod = prod * (1 if i + 1 >= n else nums[i + 1])
            res[i] = res[i] * prod
            i -= 1
        
        return res
        

