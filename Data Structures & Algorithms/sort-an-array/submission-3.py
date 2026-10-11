class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:

        def mergeSort(nums: List[int], leftPtr: int, rightPtr: int) -> List[int]:

            if leftPtr == rightPtr:
                return [nums[leftPtr]]
            
            midPtr = (rightPtr + leftPtr) // 2

            leftArr = mergeSort(nums, leftPtr, midPtr)
            rightArr = mergeSort(nums, midPtr + 1, rightPtr)

            return merge(leftArr, rightArr)
        
        def merge(nums1: List[int] | None, nums2: List[int] | None) -> List[int]:

            n1 = len(nums1) if nums1 is not None else 0
            n2 = len(nums2) if nums2 is not None else 0

            res = []

            p1 = 0
            p2 = 0

            while p1 < n1 and p2 < n2:
                if nums1[p1] <= nums2[p2]:
                    res.append(nums1[p1])
                    p1 += 1
                else:
                    res.append(nums2[p2])
                    p2 += 1
            
            while p1 < n1:
                res.append(nums1[p1])
                p1 += 1

            while p2 < n2:
                res.append(nums2[p2])
                p2 += 1

            return res
        
        return mergeSort(nums, 0, len(nums) -1)