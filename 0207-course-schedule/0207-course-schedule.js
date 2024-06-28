/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function topoSort(g, V, indegree){
    let qu = [];
    let visited = new Set();

    for(let i = 0; i < V; i++){  // v is total no of vertices
        if(indegree[i] == 0) {
            qu.push(i);
            visited.add(i);
        }
    }

    let count = 0;
    while(qu.length !== 0){
        let curr = qu.shift();
        count++;

        for(let neigbour of g[curr]){
            if(!visited[neigbour]){
                indegree[neigbour]--;   

                if(indegree[neigbour] == 0){
                    qu.push(neigbour); // add those nodes whose indegree become 0
                }
            }
        }
    }

    return count === V;
}

var canFinish = function(numCourses, prerequisites) {
    let g = new Array(numCourses); // graph
    for(let i = 0; i < numCourses; i++) g[i] = new Array();
    
    let indegree = new Array(numCourses).fill(0);  // to keep the track of incoming nodes on that index

    for(let i = 0; i < prerequisites.length; i++){
        let curr = prerequisites[i];
        let a = curr[0];
        let b = curr[1];
        g[b].push(a);
        indegree[a]++;
    }

    return topoSort(g, numCourses, indegree);
};