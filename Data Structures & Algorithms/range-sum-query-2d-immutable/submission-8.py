class NumMatrix:

    def __init__(self, matrix: List[List[int]]):

        self.prefix_sums: List[List[int]] = []

        for row in range(0, len(matrix)):

            self.prefix_sums.append([])

            for col in range(0, len(matrix[row])):

                curr_matrix_val = matrix[row][col]
                left = 0 if col == 0 else self.prefix_sums[row][col - 1]
                above = 0 if row == 0 else self.prefix_sums[row - 1][col]
                intersection = 0 if col == 0 or row == 0 else self.prefix_sums[row - 1][col - 1]

                self.prefix_sums[row].append(
                    curr_matrix_val
                    + left
                    + above
                    - intersection
                )


    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:

        return (
            self.prefix_sums[row2][col2] # bottom-right (total)
            - (0 if col1 == 0 else self.prefix_sums[row2][col1 - 1]) # bottom-left (to the left)
            - (0 if row1 == 0 else self.prefix_sums[row1 - 1][col2]) # top-right (above)
            + (0 if row1 == 0 or col1 == 0 else self.prefix_sums[row1 - 1][col1 - 1]) # top-left (intersection)
        )
        


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)