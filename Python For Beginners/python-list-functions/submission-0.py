from typing import List # this is used to add type hints for List type

def get_sum(nums: List[int]) -> int:
    total = 0
    for num in nums:
        total += num
    return total

def get_min(nums: List[int]) -> int:
    curr_min = float("inf")
    for num in nums:
        if num < curr_min:
            curr_min = num
    return curr_min

def get_max(nums: List[int]) -> int:
    curr_max = float("-inf")
    for num in nums:
        if num > curr_max:
            curr_max = num
    return curr_max

# do not modify below this line
print(get_sum([1, 2, 3, 4, 5]))
print(get_sum([5, 4, 5, 6]))

print(get_min([7, 3, 4, 5]))
print(get_min([5, 4, 5, 6]))

print(get_max([7, 3, 4, 5]))
print(get_max([5, 4, 5, 6]))
