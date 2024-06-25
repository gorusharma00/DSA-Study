/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
let result;
let neigbour = [[-1, 0], [0,-1], [1,0], [0,1]];

function bfs(i, j, grid1, grid2){
    let qu = [];
    let arr = [];
    qu.push([i, j]);
    grid2[i][j] = -1;
    arr.push([i, j]);
    
    while(!(qu.length == 0)){
        let curr = qu.shift();
        for(let n = 0; n < 4; n++){
            let newX = curr[0] + neigbour[n][0];
            let newY = curr[1] + neigbour[n][1];

            if(newX < 0 || newY < 0 || newX >= grid2.length || newY >= grid2[0].length ) continue;
            if(grid2[newX][newY] == 1){
                qu.push([newX, newY]);
                arr.push([newX, newY]);
                grid2[newX][newY] = -1;
            }
        }
    }

    for(let el of arr){
        let x = el[0];
        let y = el[1];
        if(grid1[x][y] == 0) return;
    }
    result++;
}

var countSubIslands = function(grid1, grid2) {
    result = 0;
    for(let i = 0; i < grid2.length; i++){
        for(let j = 0; j < grid2[0].length; j++){
            if(grid2[i][j] == 1){
                bfs(i, j, grid1, grid2);
            }
        }
    }
    return result;
};