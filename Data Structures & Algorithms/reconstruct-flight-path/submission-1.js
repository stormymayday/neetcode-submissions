class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = {};
        for (const [src, dst] of tickets) {
            if (!adj[src]) adj[src] = [];
        }

        tickets.sort();
        for (const [src, dst] of tickets) {
            adj[src].push(dst);
        }

        const res = ['JFK'];
        const dfs = (src) => {
            if (res.length === tickets.length + 1) return true;
            if (!adj[src]) return false;

            const temp = [...adj[src]];
            for (let i = 0; i < temp.length; i++) {
                const v = temp[i];
                adj[src].splice(i, 1);
                res.push(v);
                if (dfs(v)) return true;
                res.pop();
                adj[src].splice(i, 0, v);
            }
            return false;
        };

        dfs('JFK');
        return res;
    }
}