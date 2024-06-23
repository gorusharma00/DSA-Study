class Solution {
    public static int[][] neighbours = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};

    public static void bfs(char[][] board){
        Queue<int[]> qu = new ArrayDeque<>();
        
        int m = board.length;
        int n = board[0].length;
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(board[i][j] == 'O' && (i == 0 || j == 0 || i == m-1 || j == n-1)){
                    board[i][j] = 'a';
                    qu.add(new int[]{i, j});  // stores all index of O that are on edge and can not be surrounded
                }
            }
        }

        while(!qu.isEmpty()){
            int[] curr = qu.poll();
            for(int ni = 0; ni < 4; ni++){  // find neighbours of edge of O
                int nx = curr[0] + neighbours[ni][0];
                int ny = curr[1] + neighbours[ni][1];

                if(nx < 0 || ny < 0 || nx >= board.length || ny >= board[0].length) continue;

                if(board[nx][ny] == 'O'){
                    qu.add(new int[]{nx, ny});  // stores if they have neighbour
                    board[nx][ny] = 'a';  // mark as a that can not be surrounded
                }
            }
        }

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(board[i][j] == 'a'){  // convert all a back to O
                    board[i][j] = 'O';
                }else if(board[i][j] == 'O'){
                    board[i][j] = 'X';  // convert all O that are not neighbours of Edge of O
                }
            }
        }
    }

    public void solve(char[][] board) {
        bfs(board);
    }
}