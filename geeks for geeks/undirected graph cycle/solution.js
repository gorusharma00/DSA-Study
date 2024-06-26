
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
*/
class Solution {
    // Function to detect cycle in an undirected graph.
    detect(src, visited, adj){
        let qu = [];
        qu.push([src, 0]);  /// 0 is parent, in start node does not have parent so put 0
        visited[src] = true;
        
        while(qu.length !== 0){
            let curr = qu.shift();
            let node = curr[0];
            let parent = curr[1];
            for(let neigbour of adj[node]){
                if(!visited[neigbour]){
                    qu.push([neigbour, node]);
                    visited[neigbour] = true;
                }else if(parent != neigbour){
                    return true; // means cycle is detected
                }
            }
        }
        return false;
    }
    
    isCycle(V, adj) {
        // code here
        let visited = new Array(V).fill(false);
        for(let i = 0; i < V; i++){
            if(visited[i] == false){
                if(this.detect(i, visited, adj)) return 1;
            }
        }
        
        return 0;
    }
}