class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let idx2 = 0;
        for(let i = m; i < nums1.length; i += 1) {
                nums1[i] = nums2[idx2];
                idx2 += 1;
        }

        nums1.sort((a, b) => a - b);

    }
}
