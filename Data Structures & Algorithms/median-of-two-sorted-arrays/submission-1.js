class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        const merged = nums1.concat(nums2);
        merged.sort((a,b) => a - b);
        const totalLength = merged.length;

        // Even
        if(totalLength % 2 === 0) {
            // The median is the average of the two middle elements.
            return (merged[totalLength / 2 - 1] + merged[totalLength / 2]) / 2;
        }
        // Odd
        else {
            // The median is just the middle element.
            return merged[Math.floor(totalLength / 2)];
        }


    }
}
