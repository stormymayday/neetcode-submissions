def remove_fourth_character(word: str) -> str:
    result = []
    for i in range(0, len(word)):
        if i == 3:
            continue
        result.append(word[i])
    return "".join(result)


# do not modify below this line
print(remove_fourth_character("NeetCode"))
print(remove_fourth_character("Hello"))
