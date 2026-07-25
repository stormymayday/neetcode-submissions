import heapq
from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        freqMap = {}
        for i in range(len(nums)):
            curr_num = nums[i]
            if curr_num not in freqMap:
                freqMap[curr_num] = 1
            else:
                freqMap[curr_num] +=1

        max_pq = []
        for key, val in freqMap.items():
            heapq.heappush_max(max_pq, (val, key))

        result = []
        for _ in range(k):
            (count, num) = heapq.heappop_max(max_pq)
            result.append(num)
        
        return result