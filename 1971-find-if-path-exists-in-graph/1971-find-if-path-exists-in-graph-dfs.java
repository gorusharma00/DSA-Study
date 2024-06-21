class Solution {
    public static boolean dfs(int src, int dest, LinkedList<Integer>[] g, Set<Integer> visited){
        if(src == dest) return true;

        visited.add(src);

        boolean ans = false;

        for(int neighbour : g[src]){
            if(!visited.contains(neighbour)){
                ans = ans || dfs(neighbour, dest, g, visited);
            }
        }

        return ans;
    }

    public boolean validPath(int n, int[][] edges, int source, int destination) {
        LinkedList<Integer>[] g = new LinkedList[n];

        for(int i = 0; i < n; i++){
            g[i] = new LinkedList<>();
        }

        for(int i = 0; i < edges.length; i++){
            int u = edges[i][0];
            int v = edges[i][1];

            g[u].add(v);
            g[v].add(u);
        }

        Set<Integer> visited = new HashSet<>();

        return dfs(source, destination, g, visited);
    }
}