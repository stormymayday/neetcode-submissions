class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.data = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.data[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length < this.capacity) {
            this.data[this.length] = n;
            this.length += 1;
        } else {
            this.resize();
            // this.pushback(n);
            this.data[this.length] = n;
            this.length += 1;
        }
    }

    /**
     * @returns {number}
     */
    popback() {
        if(this.length > 0) {
            const temp = this.data[this.length - 1];
            this.length -= 1;
            return temp;
        } else {
            return -Infinity;
        }
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newData = new Array(this.capacity);
        for(let i = 0; i < this.length; i += 1) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
