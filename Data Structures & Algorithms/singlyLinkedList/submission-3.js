class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        // 'dummy' node
        this.head = new Node(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head.next;
        let i = 0;
        while(current) {
            if(index === i) {
                return current.value;
            }
            current = current.next;
            i++;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if(newNode.next === null) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let current = this.head;
        while(i < index && current) {
            current = current.next;
            i++;
        }
        if(current && current.next) {

            const target = current.next;

            if(target === this.tail) {
                this.tail = current;
            }

            current.next = target.next;
            target.next = null;
            return true;

        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let current = this.head.next;
        const nums = [];
        while(current) {
            nums.push(current.value);
            current = current.next;
        }
        return nums;
    }
}
