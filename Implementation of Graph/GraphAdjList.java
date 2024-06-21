import java.util.*;

public class GraphAdjList {
    private int v;

    private LinkedList<Integer>[] adj;

    public GraphAdjList(int v){
        this.v = v;
        adj = new LinkedList[v];

        for(int i = 0; i < v; i++){
            adj[i] = new LinkedList<>();
        }
    }

    public void addEdge(int src, int dest, boolean biDir){
        adj[src].add(dest);
        if(biDir){
            adj[dest].add(src);
        }
    }

    public void display(){
        for(int i = 0; i < v; i++){

            for(int node: adj[i]){
                System.out.print(node + "->");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        GraphAdjList g = new GraphAdjList(3);

        g.addEdge(0, 1, true);
        g.addEdge(1, 2, true);
        g.addEdge(2, 0, true);

        g.display();
    }
}
