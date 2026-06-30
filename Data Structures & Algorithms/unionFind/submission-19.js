class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.roots = new Map();
        // this.sizes = new Map();
        this.numComponents = n;
        for(let i = 0; i < n; i += 1) {
            this.roots.set(i, i);
            // this.sizes.set(i, 1);
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {

        const root = this.roots.get(x);

        if(root === x) {
            return root;
        }

        return this.roots.get(root);

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

        if(rootX === rootY) {
            return false;
        } else {
            this.roots.set(rootY, rootX);
            this.numComponents -= 1;
            return true;
        }

    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.numComponents;
    }
}
