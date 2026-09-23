class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        
        res = []

        freq_count = {}

        for num in nums:

            if num not in freq_count:
                freq_count[num] = 0
            
            freq_count[num] += 1

            if len(freq_count) > 2:
                # for element in freq_count.keys():
                for element in list(freq_count.keys()):
                    freq_count[element] -= 1
                    if freq_count[element] == 0:
                        del freq_count[element]

        if len(freq_count) == 0:
            return res
        
        # verification
        for element in freq_count.keys():
            freq_count[element] = 0

        for num in nums:
            if num in freq_count:
                freq_count[num] += 1
                if freq_count[num] > len(nums) / 3:
                    res.append(num)
                    del freq_count[num]

        return res
        






