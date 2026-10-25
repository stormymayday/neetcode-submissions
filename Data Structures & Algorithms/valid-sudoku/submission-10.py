class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        row_map = {} # key is row index 0 - 8
        col_map = {} # key is col index 0 - 8
        subgrid_map = {} # key is tuple ( row // 3, col // 3 ) from 0 to 2 for both

        for row in range(0, 9):
            
            if row not in row_map:
                row_map[row] = set()

            for col in range(0, 9):

                curr_val = board[row][col]
                if curr_val == '.':
                    continue

                if col not in col_map:
                    col_map[col] = set()
                
                subgrid_key = (row // 3, col // 3)
                if subgrid_key not in subgrid_map:
                    subgrid_map[subgrid_key] = set()
                
                # checking rows
                if curr_val in row_map[row]:
                    return False
                else:
                    row_map[row].add(curr_val)
                
                # checking cols
                if curr_val in col_map[col]:
                    return False
                else:
                    col_map[col].add(curr_val)
                
                # checking subgrids
                if curr_val in subgrid_map[subgrid_key]:
                    return False
                else:
                    subgrid_map[subgrid_key].add(curr_val)
                
        return True