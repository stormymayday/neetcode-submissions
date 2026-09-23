class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        uniques = set(nums)
        longest_sequence = 0

        for num in nums:

            is_start = True if num - 1 not in uniques else False

            if is_start:
                curr_num = num
                curr_sequence = 1
                while True if curr_num + 1 in uniques else False:
                    curr_sequence += 1
                    curr_num += 1

                longest_sequence = curr_sequence if curr_sequence > longest_sequence else longest_sequence


        return longest_sequence