class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const edges = [];
        for(let currentNode = 0; currentNode < n - 1; currentNode += 1) {
            for(let nextNode = currentNode + 1; nextNode < n; nextNode += 1) {
                const weight = Math.abs(points[currentNode][0] - points[nextNode][0]) +
                               Math.abs(points[currentNode][1] - points[nextNode][1]);
                edges.push([currentNode, nextNode, weight]);
            }
        }
        edges.sort((a, b) => a[2] - b[2]);

        let mstCost = 0;
        let edgesUsed = 0;
        const uf = new UnionFind(n);
        for(const edge of edges) {
            const [src, dst, weight] = edge;
            if(uf.union(src, dst) === true) {
                mstCost += weight;
                edgesUsed += 1;
                if(edgesUsed === n - 1) {
                    break;
                }
            }
        }
        return mstCost;
    }
}

class UnionFind {
    constructor(n) {
        this.roots = new Map();
        this.sizes = new Map();
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
            return true;
        }
    }
}
