from typing import List


def remove_element(arr: List[int], element: int) -> List[int]:
    new_list = []
    for num in arr:
        if num == element:
            continue
        new_list.append(num)
    return new_list



# do not modify below this line
arr = [1, 3, 5, 7, 9]

print(remove_element(arr, 3))
print(arr)
print(remove_element(arr, 9))
print(arr)
print(remove_element(arr, 1))
print(arr)
