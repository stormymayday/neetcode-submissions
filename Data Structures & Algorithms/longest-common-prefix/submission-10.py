class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        
        res = []
        strs_sorted_by_len = sorted(strs, key=len)

        # going through every char in the shortest string
        for char_idx, curr_char in enumerate(strs_sorted_by_len[0]):
            # comparing curr_char with chars at this idx for every other string
            for i in range(1, len(strs)):
                if strs[i][char_idx] != curr_char:
                    return "".join(res)

            res.append(curr_char)

        return "".join(res)