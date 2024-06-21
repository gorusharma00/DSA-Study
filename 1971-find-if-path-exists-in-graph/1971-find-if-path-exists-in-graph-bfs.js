/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function bfs(src, dest, graph, visited){
    if(src == dest) return true  // corner case
    const qu = []   // used temp queue u should use oringinal queue

    visited.add(src)
    qu.push(src);

    while(!(qu.length == 0)){
        const el = qu.shift();

        for(let neighbour of graph[el]){
            if(neighbour == dest) return true;
            if(!visited.has(neighbour)){
                qu.push(neighbour);
                visited.add(neighbour);
            }
        }
    }

    return false;
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

    return bfs(source, destination, graph, new Set())   // set for keeping track of visited edges   
};
