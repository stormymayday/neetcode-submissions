class Solution {
    indexOfChar(char) {
        if(char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if(char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
        }
    }
    compareCharCount(arr1, arr2) {
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] > arr2[i]) {
                return false;
            }
        }
        return true;
    }
    minWindow(s, t) {

        if(t.length > s.length) {
            return "";
        }

        const sCharCount = new Array(52).fill(0);
        const tCharCount = new Array(52).fill(0);

        for(let i = 0; i < t.length; i++) {
            tCharCount[this.indexOfChar(t[i])]++;
        }

        let minDistance = Infinity;
        let minLeft = 0;
        let left = 0;
        for(let right = 0; right < s.length; right++) {

            sCharCount[this.indexOfChar(s[right])]++;

            while(this.compareCharCount(tCharCount, sCharCount)) {

                if(right - left + 1 < minDistance) {
                    minLeft = left;
                    minDistance = right - left + 1;
                }
                
                sCharCount[this.indexOfChar(s[left])]--;
                left++;
                
            }


        }

        return minDistance === Infinity ? "" : s.slice(minLeft, minLeft + minDistance);

    }
}
