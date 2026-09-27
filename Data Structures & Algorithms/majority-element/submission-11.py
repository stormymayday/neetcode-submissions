class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        
        frequency_count = {}
        curr_max_frequency = 0
        most_frequent_element = -1

        for element in nums:
            if element not in frequency_count:
                frequency_count[element] = 0
            frequency_count[element] += 1

            curr_element_frequency = frequency_count[element]

            if curr_element_frequency > curr_max_frequency:
                curr_max_frequency = curr_element_frequency
                most_frequent_element = element
        
        return most_frequent_element