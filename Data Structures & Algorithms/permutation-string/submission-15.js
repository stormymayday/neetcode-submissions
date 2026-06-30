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
            if(arr2[i] !== arr1[i]) {
                return false;
            }
        }
        return true;
    }
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) {
            return false;
        }

        const s1CharCount = new Array(52).fill(0);
        const s2CharCount = new Array(52).fill(0);

        for(let i = 0; i < s1.length; i++) {
            s1CharCount[this.indexOfChar(s1[i])]++;
            s2CharCount[this.indexOfChar(s2[i])]++;
        }

        if(this.compareCharCount(s1CharCount, s2CharCount)) {
            return true;
        } 

        let left = 0;
        let right = s1.length;
        while(right < s2.length) {

            s2CharCount[this.indexOfChar(s2[right])]++;
            s2CharCount[this.indexOfChar(s2[left])]--;
            
            if(this.compareCharCount(s1CharCount, s2CharCount)) {
                return true;
            }

            left++;
            right++;

        }

        return false;

    }
}
