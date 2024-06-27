class Solution {
    // Function to detect cycle in a directed graph.
    
    topoSort(g, V, indegree){
        let qu = [];
        let visited = new Set();
        
        for(let i = 0; i < indegree.length; i++){
            if(indegree[i] == 0) qu.push(i); // in starting add all nodes whose indeg 0
            visited.add(i);
        }
        
        let count = 0;
        
        while(qu.length != 0){
            let curr = qu.shift();
            count++;
            
            for(let neigbour of g[curr]){
                if(!visited.has(neigbour)){
                    indegree[neigbour]--;
                    if(indegree[neigbour] == 0){
                        qu.push(neigbour); // add those nodes whose indegree become 0
                        visited.add(neigbour);  // mark them also
                    }
                }
            }
        }
        
        return count === V ? 0 : 1;  // if cycle ans 1, if not then 0
    }
    
    isCyclic(V, adj) {
        // code here
        let indegree = new Array(V).fill(0);
        
        for(let i = 0; i < adj.length; i++){
            for(let j = 0; j < adj[i].length; j++){
                indegree[adj[i][j]]++;  // calculate indegree of all node
            }
        }
        
        return this.topoSort(adj, V, indegree);
    }
}