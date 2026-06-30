class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Remove non-alphanumeric characters and convert to lowercase
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        /**
         * Recursive helper function to check if substring is a palindrome
         * @param {string} str - The string to check
         * @param {number} left - Left pointer position
         * @param {number} right - Right pointer position
         * @return {boolean} - Whether the substring is a palindrome
         */
        function helper(str, left, right) {
            // Base case 1: Empty string or single character
            if(left >= right) {
                return true;
            }

            // Base case 2: Characters don't match
            if(str[left] !== str[right]) {
                return false;
            }

            // Recursive case: Check the substring between left+1 and right-1
            return helper(str, left+1, right-1);
        }

        // Start the recursive check from the ends of the string
        return helper(s, 0, s.length - 1);
    }
}