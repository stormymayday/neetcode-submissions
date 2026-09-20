class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        n = len(nums)

        prefix_products = [1] * n
        prod = 1
        for i in range(0, n):
            prod = prod * nums[i]
            prefix_products[i] = prod
        
        postfix_products = [1] * n
        prod = 1
        for i in range(n - 1, -1, -1):
            prod = prod * nums[i]
            postfix_products[i] = prod
        
        result = []
        
        for i in range(0, n):
            before = 1 if i - 1 < 0 else prefix_products[i - 1]
            after = 1 if i + 1 >= n else postfix_products[i + 1]
            res = before * after
            result.append(res)

        return result
        