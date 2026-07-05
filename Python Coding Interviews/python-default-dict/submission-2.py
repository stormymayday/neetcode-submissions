from collections import defaultdict
from typing import List, Dict


def count_chars(s: str) -> Dict[str, int]:
    freq_map = defaultdict(int)
    for char in s:
        freq_map[char] += 1
    return freq_map



def nested_list_to_dict(nums: List[List[int]]) -> Dict[int, List[int]]:
    int_to_list = defaultdict(list)
    for sublist in nums:
        first = sublist[0]
        for i in range(1, len(sublist)):
            int_to_list[first].append(sublist[i])
    return int_to_list


# do not modify below this line
print(count_chars("hello"))
print(count_chars("helloworld"))
print(count_chars("areallylongstringwhyareyoureadingthishahalol"))

print(nested_list_to_dict([[1, 2, 3], [4, 5, 6], [1, 4]]))
print(nested_list_to_dict([[1, 2, 3, 4], [4, 5, 6, 7], [1, 4, 5, 6]]))
print(nested_list_to_dict([[5, 2, 3, 4, 5], [4, 5, 6, 7, 8], [5, 6, 7, 8, 9]]))
print(nested_list_to_dict([[3, 2, 3, 4, 5], [4, 5, 6, 7, 8], [5, 6, 7, 8]]))
