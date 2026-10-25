class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        longest = 0
        unique_nums = set(nums)

        for num in unique_nums:
            # check if num is a start of a sequence
            if num - 1 not in unique_nums:
                count = 1
                next_num = num + 1
                while next_num in unique_nums:
                    count += 1
                    next_num += 1
                longest = max(longest, count)

        return longest