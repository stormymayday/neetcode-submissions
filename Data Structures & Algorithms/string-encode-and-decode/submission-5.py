class Solution:

    def encode(self, strs: List[str]) -> str:

        res = []

        for i in range(len(strs)):
            curr = strs[i]
            str_len = len(curr)
            res.append(f"{str_len}#{curr}")

        return "".join(res)

    def decode(self, s: str) -> List[str]:

        n = len(s)
        res = []

        i = 0
        while i < n:
            
            # current string to generate
            curr = []

            # get numbers up until the '#' sign
            nums = []
            j = i
            while s[j] != '#':
                nums.append(s[j])
                j += 1

            # parse int the numbers
            num_of_chars = int("".join(nums))

            # 'slice' / 'read' the number of characters after '#' and append to 'res'
            j += 1 # advance 'j' past the '#'
            while num_of_chars > 0:
                curr.append(s[j])
                num_of_chars -= 1
                j += 1

            res.append("".join(curr))

            # j += 1 # advance 'j'? no need, 'j' should now be either out of bounds or on '#'

            # advance 'i'
            i = j # pass the batton from 'j'

        return res