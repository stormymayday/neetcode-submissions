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
        if(this.keyStore[key] === undefined) {
            return "";
        }
        
        let result = "";
        let mostRecentTime = -1;
        
        // Brute force: check every entry
        for(let i = 0; i < this.keyStore[key].length; i++) {
            const [value, time] = this.keyStore[key][i];
            
            // If this time is less than or equal to target timestamp
            // AND is more recent than our current best
            if(time <= timestamp && time > mostRecentTime) {
                result = value;
                mostRecentTime = time;
            }
        }
        
        return result;
    }
}
