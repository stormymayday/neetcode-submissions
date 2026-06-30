class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        const colSet = new Set();
        const posDiagSet = new Set();
        const negDiagSet = new Set();
        let result = 0;
        function helper(row) {
            if(row === n) {
                result += 1;
                return;
            }
            for(let col = 0; col < n; col += 1) {
                if(!colSet.has(col) && !posDiagSet.has(row + col) && !negDiagSet.has(row - col)) {

                    colSet.add(col);
                    posDiagSet.add(row + col);
                    negDiagSet.add(row - col);

                    helper(row + 1);

                    colSet.delete(col);
                    posDiagSet.delete(row + col);
                    negDiagSet.delete(row - col);

                }
            }
        }   
        helper(0);
        return result;
    }
}
