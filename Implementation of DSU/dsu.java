class dsu {
    private int[] parent;
    private int[] size;

    dsu(int[] parent) {
        this.parent = parent;
        size = new int[parent.length];
        for (int i = 0; i < parent.length; i++) {
            size[i] = 1;
        }
    }

    public void union(int x, int y) {
        int xRoot = find(x);
        int yRoot = find(y);

        if (xRoot == yRoot) return;

        if (size[xRoot] > size[yRoot]) {
            parent[yRoot] = xRoot;
            size[xRoot] += size[yRoot];
        } else {
            parent[xRoot] = yRoot;
            size[yRoot] += size[xRoot];
        }
    }

    public int find(int x) {
        if (parent[x] == x) return x;

        parent[x] = find(parent[x]);
        return parent[x];
    }

    public static void main(String[] args) {
        int[] parent = {0, 1, 2, 3, 4, 5};

        dsu obj = new dsu(parent);
        obj.union(0, 1);
        obj.union(2, 3);
        obj.union(4, 5);

        for (int n : parent) {
            System.out.print(n + " ");
        }
    }
}

// tc => o(log * n)