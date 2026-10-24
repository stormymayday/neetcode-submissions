class NumMatrix:

    def __init__(self, matrix: list[list[int]]):

        self.matrix: list[list[int]] = []

        for row in range(0, len(matrix)):

            self.matrix.append([])

            for col in range(0, len(matrix[row])):

                self.matrix[row].append(matrix[row][col])
        
        self.ROWS = len(self.matrix)
        self.COLS = len(self.matrix[0]) if self.ROWS > 0 else 0

        

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        
        if row1 > row2 or row1 < 0 or row2 > self.ROWS or col1 > col2 or col1 < 0 or col2 > self.COLS:
            return 0
        
        total_sum = 0

        for row in range(row1, row2 + 1):
            for col in range(col1, col2 + 1):
                total_sum += self.matrix[row][col]

        return total_sum
        


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)