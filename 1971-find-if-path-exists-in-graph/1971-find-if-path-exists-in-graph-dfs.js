/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function dfs(src, dest, graph, visited){
    if(src == dest) return true;

    let ans = false;
    visited.add(src);  // mark scr as visited

    for(const neighbour of graph[src]) {
        if(!visited.has(neighbour)) {
            // if we have not already visited the neighbour go
            ans = ans || dfs(neighbour, dest, graph, visited);
        }
    }
    return ans;
}

var validPath = function(n, edges, source, destination) {
    let graph = new Array(n);  // make graph like adjacency list 

    for(let i = 0; i < n; i++){
        graph[i] = [];  // for easier just used array but you should use LL for optimization
    }

    for(let i = 0; i < edges.length; i++){
        let u = edges[i][0];
        let v = edges[i][1];   // as graph is undirected if 0 -> 1 then 1 -> 0 also
        graph[u].push(v);
        graph[v].push(u);
    }

    return dfs(source, destination, graph, new Set())   // set for keeping track of visited edges
};