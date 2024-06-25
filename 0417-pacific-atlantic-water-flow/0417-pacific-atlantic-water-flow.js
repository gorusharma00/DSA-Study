/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
let row, col;
let neigbour = [[-1,0], [0, -1], [1,0], [0,1]];

function bfs(qu, h){
    let visited = new Array();
    for(let i = 0; i < row; i++){
        visited[i] = new Array(col).fill(false);  // created visited array of size heights
    }

    while(!(qu.length == 0)){
        let curr = qu.shift();
        let x = curr[0];
        let y = curr[1];
        visited[x][y] = true;

        for(let n = 0; n < 4; n++){
            let newX = x + neigbour[n][0]   // neighbour x cordinate
            let newY = y + neigbour[n][1]   // neighbour y cord.

            if(newX < 0 || newY < 0 || newX >= row || newY >= col) continue;
            if(visited[newX][newY] == true) continue;    // already fill with true
            if(h[newX][newY] < h[x][y]) continue;  // height of neigbour < height of curr
            qu.push([newX, newY]);
        }
    }
    return visited;
}

var pacificAtlantic = function(heights) {
    let result = [];
    row = heights.length;
    col = heights[0].length;

    let pacQu = [];  // pacific queue
    let atlQu = [];  // atlantic queue

    for(let i = 0; i < row ; i++){
        pacQu.push([i, 0]);
        atlQu.push([i, col -1]);
    }

    for(let j = 1; j < col; j++){
        pacQu.push([0, j]);
    }

    for(let j = 0; j < col -1 ; j++){
        atlQu.push([row -1, j]);
    }

    let pacific = bfs(pacQu, heights);
    let atlantic = bfs(atlQu, heights);


    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            // if index at both pacific and atlantic are true means they can go into both
            if(pacific[i][j] && atlantic[i][j]){
                result.push([i, j]);
            }
        }
    }
    return result;
};