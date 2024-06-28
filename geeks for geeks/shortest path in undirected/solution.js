class Solution {
    /**
    * @param number n
    * @param number m
    * @param number src
    * @param number[][] edges

    * @returns number[]
    */
    
    allDistance(src, adjList, dist){
        let qu = [];
        qu.push(src)
        dist[src] = 0;
    
        while(qu.length != 0){
            let curr = qu.shift();
    
            for(let neigbour of adjList[curr]){
                if(dist[curr] + 1 < dist[neigbour]){  
                    dist[neigbour] = 1 + dist[curr];
                    qu.push(neigbour);
                }
            }
        }
    
        for(let i = 0; i < dist.length; i++){
            if(dist[i] == Infinity){
                dist[i] = -1;
            }
        }
        
        return dist;
    }
    
    shortestPath(edges, n, m, src) {
        let adjList = new Array(n);
        for(let i = 0; i < n; i++){
            adjList[i] = new Array();
        }
    
        for(let n of edges){
            let u = n[0];
            let v = n[1];
            adjList[u].push(v);
            adjList[v].push(u);
        }
    
        let distance = new Array(n).fill(Infinity);
    
        return this.allDistance(src, adjList, distance);
    }
}
