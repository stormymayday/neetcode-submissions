class TimeMap {
    constructor() {
        this.keyStore = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if(this.keyStore[key] === undefined) {
            this.keyStore[key] = [];
        }

        this.keyStore[key].push([value, timestamp]);

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {

        let result = "";

        if(this.keyStore[key] === undefined) {

            return result;

        } else {

            const values = this.keyStore[key];

            let left = 0;
            let right = values.length - 1;

            while(left <= right) {

                const mid = Math.floor((left+right)/2);

                const [value, time] = values[mid];

                // If time is less than or equal to its VALID
                if(time <= timestamp) {
                    // Update the result
                    result = value;
                    left = mid + 1;
                } else {
                    // Time is greater than timestamp its INVALID
                    right = mid - 1;
                }

            }

            return result;

        }

    }
}
