def check_list_empty(my_list) -> bool:
    return len(my_list) == 0


def check_element_in_list(my_list, element) -> bool:
    for el in my_list:
        if el == element:
            return True
    return False


# do not modify below this line
print(check_list_empty([]))
print(check_list_empty([1, 2, 3]))

print(check_element_in_list([1, 2, 3], 1))
print(check_element_in_list([1, 2, 3], 4))

print(check_element_in_list(["Apple", "Banana", "Orange"], "Banana"))
print(check_element_in_list(["Apple", "Banana", "Orange"], "Grape"))
