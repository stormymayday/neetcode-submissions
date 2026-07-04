from typing import Dict, List

def get_dict_values(age_dict: Dict[str, int]) -> List[int]:
    vals = []
    for key in age_dict:
        vals.append(age_dict[key])
    return vals

# do not modify below this line
print(get_dict_values({"Alice": 25, "Bob": 30, "Charlie": 35}))
print(get_dict_values({"Alice": 25, "Bob": 30, "Charlie": 35, "David": 40}))
