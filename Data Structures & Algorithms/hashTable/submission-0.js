class CustomNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}

class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.data = new Array(this.capacity);
        for(let i = 0; i < this.capacity; i += 1) {
            this.data[i] = new CustomNode(-Infinity, -Infinity);
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {

        const idx = key % this.capacity;

        let prev = this.data[idx]; // at the dummy node
        let curr = this.data[idx].next;

        while(curr !== null) {

            if(curr.key === key) {
                curr.val = value; // overwrite
                return;
            }

            prev = curr;
            curr = curr.next;

        }

        prev.next = new CustomNode(key, value);
        this.size += 1;

        if(this.size >= Math.floor(this.capacity / 2)) {
            this.resize();
        }

    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {

        const idx = key % this.capacity;

        let curr = this.data[idx].next;

        while(curr !== null) {

            if(curr.key === key) {
                return curr.val;
            }

            curr = curr.next;

        }

        return -1;

    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {

        const idx = key % this.capacity;

        let prev = this.data[idx]; // at the dummy node
        let curr = this.data[idx].next;

        while(curr !== null) {

            if(curr.key === key) {

                prev.next = curr.next;
                curr.next = null;
                this.size -= 1;
                return true;

            }

            prev = curr;
            curr = curr.next;

        }

        return false;

    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize() {

        const oldData = this.data;

        this.capacity = this.capacity * 2;
        const newData = new Array(this.capacity);
        for(let i = 0; i < this.capacity; i += 1) {
            newData[i] = new CustomNode(-Infinity, -Infinity);
        }
        this.data = newData;
        this.size = 0;

        for(let i = 0; i < oldData.length; i += 1) {

            let curr = oldData[i].next;

            while(curr !== null) {
                
                this.insert(curr.key, curr.val);

                curr = curr.next;

            }

        }


    }
}
