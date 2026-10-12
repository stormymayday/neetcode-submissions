class Solution:

    def encode(self, strs: List[str]) -> str:

        res = []

        for i in range(len(strs)):

            curr_str = strs[i]

            res.append(f"{len(curr_str)}#{curr_str}")

        return "".join(res)

    def decode(self, s: str) -> List[str]:

        res = []

        i = 0
        while i < len(s):

            curr_str = []
            curr_str_len = []

            j = i
            # getting length
            while s[j] != '#':
                curr_str_len.append(s[j])
                j += 1
            j += 1
            
            k = int("".join(curr_str_len))
            # getting curr_str
            while k > 0:
                curr_str.append(s[j])
                j += 1
                k -= 1

            res.append("".join(curr_str))
            i = j

        return res