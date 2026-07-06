class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:

        def merge(arr: List[int], l: int, m: int, r: int) -> None:

            left_sub_array = arr[l:m+1]
            right_sub_array = arr[m+1:r+1]

            i, j, k = l, 0, 0

            while j < len(left_sub_array) and k < len(right_sub_array):
                if left_sub_array[j] <= right_sub_array[k]:
                    arr[i] = left_sub_array[j]
                    j += 1
                else:
                    arr[i] = right_sub_array[k]
                    k +=1
                i += 1
            
            while j < len(left_sub_array):
                arr[i] = left_sub_array[j]
                j += 1
                i += 1
            
            while k < len(right_sub_array):
                arr[i] = right_sub_array[k]
                k += 1
                i += 1
        
        def mergeSort(arr: List[int], l: int, r: int) -> None:
            if l == r:
                return
            
            m = (l + r) // 2
            mergeSort(arr, l, m)
            mergeSort(arr, m + 1, r)
            merge(arr, l, m, r)
        
        mergeSort(nums, 0, len(nums) - 1)
        return nums