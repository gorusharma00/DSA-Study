function allDistance(adjList, dist){
    let qu = [];
    qu.push(0)
    dist[0] = 0;

    while(qu.length != 0){
        let curr = qu.shift();

        for(let neigbour of adjList[curr]){
            if(dist[curr] + 1 < dist[neigbour]){  
                dist[neigbour] = 1 + dist[curr];
                qu.push(neigbour);
            }
        }
    }

    return dist;
}

function shortestPath(V,edges){
    let adjList = new Array(V);

    for(let i = 0; i < V; i++){
        adjList[i] = new Array();
    }

    for(let n of edges){
        let u = n[0];
        let v = n[1];
        adjList[u].push(v);
        adjList[v].push(u);
    }

    let distance = new Array(V).fill(Infinity);

    return allDistance(adjList, distance);
}

let edgeList =  [[0,1],[0,3],[3,4],[4 ,5],[5, 6],[1,2],[2,6],[6,7],[7,8],[6,8]];
let result = shortestPath(9, edgeList);

console.log(result);
