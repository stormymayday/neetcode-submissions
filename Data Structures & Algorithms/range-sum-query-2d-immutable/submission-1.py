class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        # padded matrix (one extra row and column)
        self.prefix_sums = []
        ROWS = len(matrix) + 1
        COLS = len(matrix[0]) + 1

        # initialzing padded matrix with zeros
        for row in range(0, ROWS):
            new_row = []
            for col in range(0, COLS):
                new_row.append(0)
            self.prefix_sums.append(new_row)

        for row in range(0, ROWS - 1):
            for col in range(0, COLS - 1):
                curr = matrix[row][col]
                diagonal = self.prefix_sums[row][col]
                left = self.prefix_sums[row + 1][col]
                above = self.prefix_sums[row][col + 1]
                self.prefix_sums[row + 1][col + 1] = curr + left + above - diagonal

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        total = self.prefix_sums[row2 + 1][col2 + 1]
        left = self.prefix_sums[row2 + 1][col1]
        above = self.prefix_sums[row1][col2 + 1]
        diagonal = self.prefix_sums[row1][col1]
        return total - (left + above) + diagonal


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)