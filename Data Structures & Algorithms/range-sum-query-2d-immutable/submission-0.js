class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        this.sumMatrix = [];
        // Creating the sumMatrix
        for(let i = 0; i < ROWS + 1; i += 1) {
            this.sumMatrix.push(new Array(COLS + 1).fill(0));
        }

        // Filling in the sumMatrix
        for(let r = 0; r < ROWS; r += 1) {
            let prefixSum = 0;
            for(let c = 0; c < COLS; c += 1) {
                prefixSum += matrix[r][c];
                const above = this.sumMatrix[r][c + 1];
                this.sumMatrix[r + 1][c + 1] = prefixSum + above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
    const bottomRight = this.sumMatrix[row2 + 1][col2 + 1];
    const above = this.sumMatrix[row1][col2 + 1];        // ✅ row1, not row1-2
    const left = this.sumMatrix[row2 + 1][col1];         // ✅ col1, not col1-2  
    const topLeft = this.sumMatrix[row1][col1];          // ✅ row1, col1
    return bottomRight - above - left + topLeft;
}
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
