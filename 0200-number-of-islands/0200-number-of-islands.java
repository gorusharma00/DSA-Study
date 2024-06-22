import java.util.*;

class Solution {
    public static int[][] neighbours = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
    
    public static void bfs(int i, int j, char[][] grid){
        Queue<int[]> qu = new ArrayDeque<>();
        qu.add(new int[]{i, j});  // added starting point
        grid[i][j] = 'v';  // marking visited cell  // can't use -1

        while (!qu.isEmpty()){
            int[] curr = qu.poll();
            for (int n = 0; n < 4; n++){
                int newNeigboursX = curr[0] + neighbours[n][0];
                int newNeigboursY = curr[1] + neighbours[n][1];

                if (newNeigboursX < 0 || newNeigboursY < 0 || newNeigboursX >= grid.length || newNeigboursY >= grid[0].length){
                    continue;   // coordinates go out of bounds of the grid
                }

                if (grid[newNeigboursX][newNeigboursY] == '1'){
                    grid[newNeigboursX][newNeigboursY] = 'v';  // marking visited cell
                    qu.add(new int[]{newNeigboursX, newNeigboursY});
                }
            }
        }
    }

    public int numIslands(char[][] grid) {
        int cc = 0; // connected components
        for (int i = 0; i < grid.length; i++){
            for (int j = 0; j < grid[0].length; j++){
                if (grid[i][j] == '1'){
                    bfs(i, j, grid);
                    cc++;
                }
            }
        }
        return cc;
    }
}
