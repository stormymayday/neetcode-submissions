class MyHashSet {
    constructor() {
        this.capacity = 1000001;
        this.data = new Array(this.capacity).fill(false);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {

        this.data[key % this.capacity] = true;

    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {

        this.data[key % this.capacity] = false;

    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {

        return this.data[key % this.capacity];

    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
