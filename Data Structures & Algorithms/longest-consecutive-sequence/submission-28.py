class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        uniques = set(nums)
        longest_sequence = 0

        for num in uniques:

            if num - 1 not in uniques:
                
                curr_num = num
                curr_sequence_length = 1

                while curr_num + 1 in uniques:

                    curr_sequence_length += 1
                    curr_num += 1
            
                longest_sequence = max(longest_sequence, curr_sequence_length)

        return longest_sequence