class NumArray:

    def __init__(self, nums: List[int]):
        self.prefix_sums = []
        
        current_running_sum = 0
        for number in nums:
            current_running_sum += number
            self.prefix_sums.append(current_running_sum)
        

    def sumRange(self, left: int, right: int) -> int:
        result = 0
        if left > 0:
            result = self.prefix_sums[right] - self.prefix_sums[left - 1]
        else:
            result = self.prefix_sums[right]
        return result
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)