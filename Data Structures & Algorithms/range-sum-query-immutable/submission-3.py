class NumArray:

    def __init__(self, nums: List[int]):
        self.prefix_sums = [0]
        curr_running_sum = 0
        for num in nums:
            curr_running_sum += num
            self.prefix_sums.append(curr_running_sum)
        

    def sumRange(self, left: int, right: int) -> int:
        return self.prefix_sums[right + 1] - self.prefix_sums[left]
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)