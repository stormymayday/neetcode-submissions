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
        let mostRecentTime = -1;

        if(this.keyStore[key] === undefined) {

            return result;

        } else {

            for(let i = 0; i < this.keyStore[key].length; i++) {

                const [value, time] = this.keyStore[key][i];

                if(time <= timestamp && time >  mostRecentTime) {
                    result = value;
                    mostRecentTime = time;
                }

            }

            return result;

        }

    }
}
