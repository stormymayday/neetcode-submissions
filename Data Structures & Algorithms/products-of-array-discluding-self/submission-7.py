class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        
        n = len(nums)

        res = [1] * n

        prod = 1
        for i in range(0, n):
            res[i] = prod
            prod *= nums[i]
            
        prod = 1
        for i in range(n -1, -1, -1):
            res[i] *= prod
            prod *= nums[i]
        
        return res