class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {

        // Need to start max streak with 1 (1 element)
        let maxStreak = 1;

        for(let i = 0; i < arr.length; i += 1) {

            let prevCompSign = "";

            for(let j = i + 1; j < arr.length; j += 1) {

                let currCompSign = "";

                let curr = arr[j];
                let prev = arr[j - 1];

                if(prev > curr) {
                    currCompSign = ">";
                } else if(prev < curr) {
                    currCompSign = "<";
                } else {
                    // current sign is "==="
                    break;
                }

                // If there is a prevCompgSign
                // if(prevCompSign !== "") {

                    if(prevCompSign === currCompSign) {
                        prevCompSign = currCompSign;
                        break;
                    }
                    
                    // If prev nad curr signs are different, update the streak
                    // if(prevCompSign !== currCompSign) {
                    //     // maxStreak = Math.max(maxStreak, j - i + 1);
                    // } else {
                    //     prevCompSign = currCompSign;
                    //     break;
                    // }

                // }

                // there is no prevCompSign OR signs are different
                maxStreak = Math.max(maxStreak, j - i + 1);
                prevCompSign = currCompSign;

            }

        }

        return maxStreak;

    }
}
