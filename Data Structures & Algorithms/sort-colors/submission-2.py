class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        
        num_of_zeros = 0
        num_of_ones = 0
        num_of_twos = 0

        for i in range(n):
            curr_element = nums[i]

            if curr_element == 0:
                num_of_zeros += 1
            elif curr_element == 1:
                num_of_ones += 1
            elif curr_element == 2:
                num_of_twos += 1
        
        for i in range(n):

            if num_of_zeros > 0:
                nums[i] = 0
                num_of_zeros -= 1
            elif num_of_ones > 0:
                nums[i] = 1
                num_of_ones -= 1
            elif num_of_twos > 0:
                nums[i] = 2
                num_of_twos -= 1

