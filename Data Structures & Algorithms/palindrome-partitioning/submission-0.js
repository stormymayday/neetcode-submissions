class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const validPartitions = [];
        const partition = [];
        const dfs = (buildPointer) => {
            if(buildPointer === s.length) {
                validPartitions.push([...partition]);
                return;
            }
            for(let i = buildPointer; i < s.length; i += 1) {
                const snippet = s.slice(buildPointer, i + 1);
                if(this.isPalindrome(snippet) === true) {
                    partition.push(snippet);
                    dfs(i + 1);
                    partition.pop();
                }
            }
        }
        dfs(0);
        return validPartitions;
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while(l < r) {
            if(s[l] !== s[r]) {
                return false;
            }
            l += 1;
            r -= 1;
        }
        return true;
    }
}
