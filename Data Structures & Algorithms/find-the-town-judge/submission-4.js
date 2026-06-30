class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {

        const inDegreeMap = new Map();
        const outDegreeMap = new Map();

        for(let i = 1; i <= n; i += 1) {
            inDegreeMap.set(i, 0);
            outDegreeMap.set(i, 0);
        }

        for(const [src, dst] of trust) {

            inDegreeMap.set(dst, inDegreeMap.get(dst) + 1);
            outDegreeMap.set(src, outDegreeMap.get(src) + 1);

        }

        for(let i = 1; i <= n; i += 1) {
            if(inDegreeMap.get(i) === n - 1 && outDegreeMap.get(i) === 0) {
                return i;
            }
        }
        return -1;

    }
}
