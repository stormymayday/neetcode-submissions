class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        
        freq_count = {}
        max_occurance = 0
        most_frequent_num = -1

        for num in nums:
            if num not in freq_count:
                freq_count[num] = 0
            freq_count[num] += 1

            if freq_count[num] > max_occurance:
                max_occurance = freq_count[num]
                most_frequent_num = num
        
        return most_frequent_num