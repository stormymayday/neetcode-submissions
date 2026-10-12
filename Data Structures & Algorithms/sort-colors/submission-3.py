class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        left = 0
        mid = 0
        right = len(nums) -1

        def swap(arr: List[nums], left: int, right: int) -> None:
            temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

        while mid <= right:
            
            curr_num = nums[mid]

            if curr_num == 0:
                swap(nums, left, mid)
                mid += 1
                left += 1
            elif curr_num == 1:
                mid += 1
            elif curr_num == 2:
                swap(nums, mid, right)
                right -= 1