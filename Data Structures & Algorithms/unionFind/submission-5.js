class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.roots = new Map();
        this.heights = new Map();
        this.numComponents = n;
        for(let i = 0; i < n; i += 1) {
            this.roots.set(i, i);
            this.heights.set(i, 1);
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        const parent = this.roots.get(x);
        if(parent !== x) {
            this.roots.set(x, this.roots.get(parent));
        }
        return this.roots.get(x);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if(rootX !== rootY) {
            if(this.heights.get(rootX) > this.heights.get(rootY)) {
                this.roots.set(rootY, rootX);
            } else if(this.heights.get(rootY) > this.heights.get(rootX)) {
                this.roots.set(rootX, rootY);
            } else {
                this.roots.set(rootX, rootY);
                this.heights.get(rootY, this.heights.get(rootY) + 1);
            }
            this.numComponents -= 1;
            return true;
        } else {
            return false;
        }
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.numComponents;
    }
}
