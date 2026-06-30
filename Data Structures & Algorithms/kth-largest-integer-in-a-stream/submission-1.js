class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.values = nums;
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.values.push(val);
        this.values.sort((a, b) => a - b);
        return this.values[this.values.length - this.k];
    }
}
