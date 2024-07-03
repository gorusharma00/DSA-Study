function UNION(x, y, parent, size){
    // parent is the dsu array

    let xRoot = find(x, parent)  // find parent of x
    let yRoot = find(y, parent)
    
    if(xRoot == yRoot) return; // x and y both have same parent

    if(size[xRoot] > size[yRoot]){
        // x group is bigger
        parent[yRoot] = xRoot;
        size[xRoot] += size[yRoot];
    }else{
        // if y has bigger group
        parent[xRoot] = yRoot;
        size[yRoot] += size[xRoot];
    }
}

function find(x, parent){
    if(parent[x] === x) return x // given x is parent
    parent[x] = find(x);  // for path compression attach

    return parent[x];
}

let parent = [0, 1, 2, 3, 4, 5];
let size = [1, 1, 1, 1, 1, 1];

UNION(0, 1, parent, size);
UNION(2, 3, parent, size);
UNION(4, 5, parent, size);

console.log(parent); // Output: [1, 1, 3, 3, 5, 5]
console.log(size); // Output: [1, 2, 1, 2, 1, 2]

// tc => o(log * n)