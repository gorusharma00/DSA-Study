function checkCycle(src, adj, visited){
    let qu = [];
    qu.push([src, 0]);  // pushing src = index that is not visited, 0 = parent means src node has did not have parent
    visited[src] = true;

    while(qu.length !== 0){
        let curr = qu.shift();  
        let node = curr[0]; // index 
        let parent = curr[1];

        for(let neighbour of adj[node]){  // check available path from that index
            if(visited[neighbour] == false){
                qu.push([neighbour, node]);
                visited[neighbour] = true;
            }else if(neighbour != parent){  // in undirected graph fist node will be you parent, if it's not you visited before
                return true;
            }
        }
    }
    return false;
}

function isCycle(v, adj){
    let visited = new Array(v).fill(false);  // take visited array 

    for(let i = 0; i < v; i++ ){
        if(visited[i] == false){
            if(checkCycle(i, adj, visited)) return true;
        }
    }

    return false;
}


let adjList = [
    [1,2],
    [0,3],
    [0,4],
    [1,5],
    [2,5],
    [3,4],
]

let adjList2 = [
    [1, 2],
    [0,2],
    [0,1],
]

let adjList3 = [
    [1,2],
    [0,3],
    [0,4],
    [1],
    [2],
]

let ans = isCycle(5, adjList3);

console.log(ans);

// tc -> o(n + 2e)
// sc -> o(n)