public class Solution {
    
    public static String cycleDetection(int[][] edges, int n, int m) {
        // Write your code here.
        int[] parent = new int[n];
        int[] size = new int[n];
        for(int i = 0; i < n; i++){
            parent[i] = i;
            size[i] = 1;
        }

        for(int[] edge : edges ){
            int u = edge[0] - 1; // for zero based indexing
            int v = edge[1] - 1;
            if(find(u, parent) == find(v, parent)){
                return "Yes";
            }

            union(u, v, parent, size);
        }
        
        return "No";
    }

    public static int find(int x, int[] parent){
        if(parent[x] != x){
            parent[x] = find(parent[x], parent);
        }

        return parent[x];
    }

    public static void union(int u, int v, int[] parent, int[] size){
        int px = find(u, parent);
        int py = find(v, parent);

        if(px == py) return;
        if(size[px] > size[py]){
            parent[py] = px;
            size[px] += size[py];
        }else{
            parent[px] = py;
            size[py] += size[px];
        }
    }
    
}