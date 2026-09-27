class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        
        freq_count = {}
        max_frequency = 0
        most_frequent_num = -1

        for num in nums:
            if num not in freq_count:
                freq_count[num] = 0
            freq_count[num] += 1

            if freq_count[num] > max_frequency:
                max_frequency = freq_count[num]
                most_frequent_num = num
        
        return most_frequent_num