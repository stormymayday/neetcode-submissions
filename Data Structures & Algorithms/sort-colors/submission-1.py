class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        num_zeros = 0
        num_ones = 0
        num_twos = 0

        for i in range(len(nums)):
            curr_num = nums[i]
            if curr_num == 0:
                num_zeros += 1
            elif curr_num == 1:
                num_ones += 1
            else:
                num_twos += 1
        
        for i in range(0, num_zeros):
            nums[i] = 0
        
        for i in range(num_zeros, num_zeros + num_ones):
            nums[i] = 1

        for i in range(num_zeros + num_ones, len(nums)):
            nums[i] = 2
        