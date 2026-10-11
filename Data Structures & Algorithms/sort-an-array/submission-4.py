class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:

        def merge(arr: List[int], leftBound: int, mid: int, rightBound: int) -> None:

            temp: List[int] = []

            leftPtr = leftBound
            rightPtr = mid + 1

            while leftPtr <= mid and rightPtr <= rightBound:
                if arr[leftPtr] <= arr[rightPtr]:
                    temp.append(arr[leftPtr])
                    leftPtr += 1
                else:
                    temp.append(arr[rightPtr])
                    rightPtr += 1
            
            while leftPtr <= mid:
                temp.append(arr[leftPtr])
                leftPtr += 1

            while rightPtr <= rightBound:
                temp.append(arr[rightPtr])
                rightPtr += 1

            for index in range(leftBound, rightBound + 1):
                arr[index] = temp[index - leftBound]

        def mergeSort(arr: List[int], leftBound: int, rightBound: int) -> None:
            if leftBound == rightBound:
                return
            
            mid = (leftBound + rightBound) // 2

            mergeSort(arr, leftBound, mid)
            mergeSort(arr, mid + 1, rightBound)

            merge(arr, leftBound, mid, rightBound)
        
        mergeSort(nums, 0, len(nums) - 1)

        return nums