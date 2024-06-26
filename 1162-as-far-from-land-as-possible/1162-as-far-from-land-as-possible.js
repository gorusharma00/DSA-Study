/**
 * @param {number[][]} grid
 * @return {number}
 */
let neighbours = [[-1, 0], [0,-1], [1,0], [0,1]];

function bfs(grid){
    let qu = [];

    let m = grid.length;
    let n = grid[0].length;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                qu.push([i, j, 0]);
            }
        }
    }

    if (qu.length === 0 || qu.length === m * n) return -1; // no 1 found or all are one
    let distance = -1;

    while(qu.length != 0){
        let [x, y, dist] = qu.shift();
        distance = Math.max(distance, dist);
        for(let ni = 0; ni < 4; ni++){
            let newX = x + neighbours[ni][0];
            let newY = y + neighbours[ni][1];
            if(newX < 0 || newY < 0 || newX >= m || newY >= n) continue;
            if(grid[newX][newY] === 0){
                qu.push([newX, newY, dist + 1]);
                grid[newX][newY] = 1 // marking visited
            }
        }
    }
    return distance;
}

var maxDistance = function(grid) {
    return bfs(grid);
};