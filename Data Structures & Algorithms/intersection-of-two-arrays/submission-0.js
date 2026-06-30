class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const set1 = new Set(nums1);
        const res = new Set();
        for(const el of nums2) {
            if(set1.has(el)) {
                res.add(el);
            }
        }

        return Array.from(res);
    }
}
