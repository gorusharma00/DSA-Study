class Solution {
    public static int[][] neighbours = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};

    public static int bfs(int[][] grid){
        Queue<int[]> qu = new ArrayDeque<>();
        int m = grid.length;
        int n = grid[0].length;
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == 2){  // if the current orange is rotten
                    qu.add(new int[]{i, j, 0}); // add coordinate of orange to queue with time = 0, add all sources
                }
            }
        }
        int result = 0;
        while(!qu.isEmpty()){
            int[] curr = qu.poll();
            int x = curr[0];   // coordinates of the current rotten orange
            int y = curr[1];
            int tm = curr[2];  // time at which orange was rotten

            for(int ni= 0; ni < 4; ni++){
                int nx = x + neighbours[ni][0];
                int ny = y + neighbours[ni][1];

                if(nx < 0 || ny < 0 || nx >= m || ny >= n) continue; // outside the grid
                if(grid[nx][ny] == 1){
                    qu.add(new int[]{nx, ny, tm+1});
                    result = Math.max(result, tm+1);
                    grid[nx][ny] = 2;  // mark the orange as rot
                }
            }
        }

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == 1) return -1;  // means if still fresh orange remains
            }
        }

        return result;
    }

    public int orangesRotting(int[][] grid) {
        return bfs(grid);
    }
}