/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let result;

function dfs(src, graph, path){
    if(src == graph.length - 1){
        result.push([...path]);  // you can't directly add path because if you do means you passing refrence
                                // and we are chaging path arr in every call so you have to pass deep copy
        return;
    }

    for(let neigbor of graph[src]){
        path.push(neigbor)
        dfs(neigbor, graph, path);
        path.pop();
    }
}

var allPathsSourceTarget = function(graph) {
    result = new Array();
    let src = 0;
    let path = []  // store all the nodes come between src and target
    path.push(0);
    dfs(src, graph, path);  
    return result;  
};