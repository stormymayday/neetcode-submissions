from typing import List

def read_integers() -> List[int]:
    user_input = input()
    integers = []
    chars = user_input.split(",")
    for char in chars:
        try:
            integers.append(int(char))
        except ValueError:
            continue
    return integers

# do not modify the code below
print(read_integers())
print(read_integers())
print(read_integers())
