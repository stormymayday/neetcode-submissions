class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        n = len(nums)

        prefix_prods = []
        prod = 1
        for i in range(0, n):
            prod = prod * nums[i]
            prefix_prods.append(prod)
        
        postfix_prods = [1] * n
        prod = 1
        for i in range(n - 1, -1, -1):
            prod = prod * nums[i]
            postfix_prods[i] = prod
        
        res = []

        for i in range(0, n):
            before = 1 if i - 1 < 0 else prefix_prods[i - 1]
            after = 1 if i + 1 >= n else postfix_prods[i + 1]
            res.append(before * after)

        return res
        