class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = this.tail = null;
        this.length = 0;
        this.capacity = capacity;
        this.lookup = new Map();
        this.reverseLookup = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.lookup.get(key);
        if(!node) {
            return -1;
        }

        this.detach(node);
        this.prepend(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        const node = this.lookup.get(key);
        
        if(!node) {
            // does not exist
            const newNode = new Node(value);
            this.prepend(newNode);
            this.length++;

            this.trimCache();

            this.lookup.set(key, newNode);
            this.reverseLookup.set(newNode, key);

        } else {
            // exists
            this.detach(node);
            this.prepend(node);
            node.value = value;
        }

    }

    detach(node) {
        if(node.prev) {
            node.prev.next = node.next;
        }
        if(node.next) {
            node.next.prev = node.prev;
        }
        if(this.head === node) {
            this.head = this.head.next;
        }
        if(this.tail === node) {
            this.tail = this.tail.prev;
        }
        node.next = null;
        node.prev = null;

    }

    prepend(node) {
        if(!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    trimCache() {
        if(this.length <= this.capacity) {
            return;
        }

        const tail = this.tail;
        this.detach(this.tail);
        const key = this.reverseLookup.get(tail);
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}
