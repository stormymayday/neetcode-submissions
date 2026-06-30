class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    // Create array of [value, index] pairs
    const numWithIndices = nums.map((num, index) => [num, index]);
    
    // Sort by value
    numWithIndices.sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = numWithIndices.length - 1;
    
    while (left < right) {
        const sum = numWithIndices[left][0] + numWithIndices[right][0];
        
        if (sum === target) {
            return [numWithIndices[left][1], numWithIndices[right][1]];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    
    return [];
}
}
