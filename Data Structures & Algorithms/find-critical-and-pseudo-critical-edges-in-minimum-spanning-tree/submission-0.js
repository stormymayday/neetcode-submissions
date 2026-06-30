class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        // add original index to the edge list
        for(let i = 0; i < edges.length; i += 1) {
            edges[i].push(i);
        }

        // sort edges by weight
        edges.sort((a, b) => a[2] - b[2]);

        // Perform inital Kruskal's to calculate mstCost
        const uf = new UnionFind(n);
        let mstCost = 0;
        for(const edge of edges) {
            const [src, dst, weight ] = edge;
            if(uf.union(src, dst) === true) {
                mstCost += weight;
            }
        }

        const critical = [];
        const pseudo = [];

        // Brute Force
        for(const edge of edges) {
            const [src, dst, weight, originalIndex] = edge;
            // Without current edge
            const ufWithout = new UnionFind(n);
            let weightWithout = 0;
            let edgesUsed = 0;
            for(const edge of edges) {
                const [srcX, dstX, weightX, originalIndexX] = edge;
                if(originalIndexX !== originalIndex && ufWithout.union(srcX, dstX) === true) {
                    weightWithout += weightX;
                    edgesUsed += 1;
                }
            }
            if(edgesUsed !== n - 1 || weightWithout > mstCost) {
                critical.push(originalIndex);
                continue;
            }

            // Force current edge
            const ufWith = new UnionFind(n);
            ufWith.union(src, dst);
            let weightWith = weight;
            for(const edge of edges) {
                const [srcY, dstY, weightY, originalIndexY] = edge;
                if(ufWith.union(srcY, dstY) === true) {
                    weightWith += weightY;
                }
            }
            if(weightWith === mstCost) {
                pseudo.push(originalIndex);
            }

        }

        return [critical, pseudo];
    }
}

class UnionFind {
    constructor(n) {
        this.roots = new Map();
        this.sizes = new Map();
        this.numComponents = n;
        for(let i = 0; i < n; i += 1) {
            this.roots.set(i, i);
            this.sizes.set(i, 1);
        }
    }
    find(x) {
        const root = this.roots.get(x);
        if(root !== x) {
            this.roots.set(x, this.find(root));
        }
        return this.roots.get(x);
    }
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if(rootX === rootY) {
            return false;
        } else {
            if(this.sizes.get(rootX) >= this.sizes.get(rootY)) {
                this.roots.set(rootY, rootX);
                this.sizes.set(rootX, this.sizes.get(rootX) + this.sizes.get(rootY));
            } else {
                this.roots.set(rootX, rootY);
                this.sizes.set(rootY, this.sizes.get(rootY) + this.sizes.get(rootX));
            }
            this.numComponents -= 1;
            return true;
        }
    }
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }
    getNumComponents() {
        return this.numComponents;
    }
}
