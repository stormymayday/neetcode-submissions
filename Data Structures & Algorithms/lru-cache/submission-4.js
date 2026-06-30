class Node {
    constructor(key, value) {
        this.key = key;
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
        this.capacity = capacity;
        this.cache = new Map();

        this.left = new Node(0, 0);
        this.right = new Node(0,0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.cache.get(key);

        if(!node) {
            return -1;
        }

        this.detach(node);
        this.append(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            const node = this.cache.get(key);
            this.detach(node);
        }
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.append(newNode);

        if(this.cache.size > this.capacity) {
            const lru = this.left.next;
            this.detach(lru);
            this.cache.delete(lru.key);
        }

    }

    detach(node) {
        const prev = node.prev;
        const next = node.next;
        if(prev) {
            prev.next = next;
        }
        if(next) {
            next.prev = prev;
        }
    }

    append(node) {
        const prev = this.right.prev;
        const next = this.right;

        prev.next = node;
        next.prev = node;

        node.prev = prev;
        node.next = next;
    }
}
