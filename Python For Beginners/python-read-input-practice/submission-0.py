def add_two_numbers() -> int:
    total_sum = 0
    user_input = input()
    chars = user_input.split(",")
    for char in chars:
        try:
            total_sum += int(char)
        except ValueError:
            continue
    return total_sum



# do not modify below this line
print(add_two_numbers())
print(add_two_numbers())
print(add_two_numbers())
print(add_two_numbers())
