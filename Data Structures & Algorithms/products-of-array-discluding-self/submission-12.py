class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        n = len(nums)

        res: List[int] = []

        curr_prefix_prod = 1
        # 'prefix' pass
        for i in range(0, n):
            curr_prefix_prod *= (1 if i == 0 else nums[i - 1])
            res.append(curr_prefix_prod)
        
        curr_postfix_prod = 1
        # 'postfix' and 'result' pass
        for i in range(n - 1, -1, -1):
            curr_postfix_prod *= (1 if i == n - 1 else nums[i + 1])
            res[i] = res[i] * curr_postfix_prod

        return res
        