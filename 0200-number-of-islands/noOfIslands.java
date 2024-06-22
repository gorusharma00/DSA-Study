import java.util.ArrayDeque;
import java.util.List;
import java.util.Queue;

public class noOfIslands{
    public static int[][] neighbours = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
    
    public static void bfs(int i, int j, String[][] grid){
        Queue<List<Integer>> qu = new ArrayDeque<>();

        qu.add(List.of(i, j));  // added starting point
        grid[i][j] = "-1";

        while(qu.size() != 0){
            List<Integer> curr = qu.poll();
            for(int n = 0; n < 4; n++){
                int newNeigboursX = curr.get(0) + neighbours[n][0];
                int newNeigboursy = curr.get(1) + neighbours[n][1];

                if(newNeigboursX < 0 || newNeigboursy < 0 || newNeigboursX >= grid.length || newNeigboursy >= grid[0].length){
                    continue;   // means cordinates go out bound of grid
                }

                if(grid[newNeigboursX][newNeigboursy] == "1"){
                    grid[newNeigboursX][newNeigboursy] = "-1";
                    qu.add(List.of(newNeigboursX, newNeigboursy));
                }
            }
        }
    }

    public static int bfsHelper(String[][] grid){
        int cc = 0; // connected components
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                if(grid[i][j] == "1"){
                    bfs(i, j, grid);
                    cc++;
                }
            }
        }

        return cc;
    }

    public static void main(String[] args) {
        String[][] grid = {
            {"1","1","0","0","0"},
            {"1","1","0","0","0"},
            {"0","0","1","0","0"},
            {"0","0","0","1","1"}
        };

        System.out.println(bfsHelper(grid));
    }
}