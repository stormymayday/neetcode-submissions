class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        
        res = []
        strs_sorted_by_len = sorted(strs, key=len)

        # going through every char in the shortest string
        for char_idx, char in enumerate(strs_sorted_by_len[0]):
            # comparing with every char at this index with every other string
            for i in range(1, len(strs)):
                if strs[i][char_idx] != char:
                    return "".join(res)

            res.append(char)

        return "".join(res)