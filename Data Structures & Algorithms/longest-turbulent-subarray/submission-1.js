class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {

        // not sure
        let maxStreak = 1;

        for(let i = 0; i < arr.length; i += 1) {

            // not sure
            // let currStreak = 1;

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
                    break;
                }
                // else {
                //     currCompSign = "=";
                // }

                // If there is a prevCompgSign
                if(prevCompSign !== "") { // perhaps this prevents the calculation
                    
                    // If prev nad curr signs are different, update the streak
                    if(prevCompSign !== currCompSign) {
                        // currStreak += 1;
                        maxStreak = Math.max(maxStreak, j - i + 1); // this does not run
                    } else {
                        prevCompSign = currCompSign;
                        break;
                    }

                }
                maxStreak = Math.max(maxStreak, j - i + 1);
                prevCompSign = currCompSign;

            }

        }

        return maxStreak;

    }
}
