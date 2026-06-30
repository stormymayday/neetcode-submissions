class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        const n = isConnected.length;
        const uf = new UnionFind(n);
        for(let r = 0; r < n; r += 1) {
            for(let c = 0; c < n; c += 1) {
                if(isConnected[r][c] === 1) {
                    uf.union(r, c);
                }
            }
        }
        return uf.getNumComponents();
    }
}

class UnionFind {
    constructor(n) {
        this.roots = new Map();
        this.heights = new Map();
        this.numComponents = n;
        for(let i = 0; i < n; i += 1) {
            this.roots.set(i, i);
            this.heights.set(i, 1);
        }
    }
    find(x) {
        const parent = this.roots.get(x);
        if(parent !== x) {
            this.roots.set(x, this.find(parent));
        }
        return this.roots.get(x);
    }
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if(rootX === rootY) {
            return false;
        } else {
            if(this.heights.get(rootX) > this.heights.get(rootY)) {
                this.roots.set(rootY, rootX);
            } else if(this.heights[rootY] > this.heights[rootX]) {
                this.roots.set(rootX, rootY);
            } else {
                this.roots.set(rootX, rootY);
                this.heights.set(rootY, this.heights.get(rootY) + 1);
            }
            this.numComponents -= 1;
            return true;
        }
    }
    getNumComponents() {
        return this.numComponents;
    }
}
