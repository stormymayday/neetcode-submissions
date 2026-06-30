class CustomListNode {
    constructor(key, val) {
        this.val = [key, val];
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.capacity = 101;
        this.data = new Array(this.capacity);
        for(let i = 0; i < this.capacity; i += 1) {
            this.data[i] = new CustomListNode(-Infinity, -Infinity);
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const newNode = new CustomListNode(key, value);
        let prev = this.data[key % this.capacity];
        let curr = this.data[key % this.capacity].next;

        while(curr !== null) {
            // key already exists
            if(curr.val[0] === key) {
                // overwriting an existing value
                curr.val[1] = value;
                return;
            } else {
                prev = curr;
                curr = curr.next;
            }

        }

        prev.next = newNode;
        return;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let curr = this.data[key % this.capacity].next;

        while(curr !== null) {

            if(curr.val[0] === key) {
                return curr.val[1];
            } else {
                curr = curr.next;
            }

        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let prev = this.data[key % this.capacity];
        let curr = this.data[key % this.capacity].next;

        while(curr !== null) {

            if(curr.val[0] === key) {
                prev.next = curr.next;
                curr.next = null;
                return;
            } else {
                prev = curr;
                curr = curr.next;
            }

        }

        return;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
