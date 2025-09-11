function union(x, y, parent, size){
    let px = find(x, parent);
    let py = find(y, parent);

    if(px === py) return;

    if(size[px] > size[py]){
        parent[py] = px;
        size[px] += size[py];
    }else{
        parent[px] = py;
        size[py] += size[px];
    }
}

function find(x, parent){
    if(parent[x] !== x){
        parent[x] = find(parent[x], parent);
    }
    return parent[x];
}

function kruskal(edgeList, v){
    edgeList.sort((a, b) => a[2] - b[2]);

    let parent = new Array(v).fill(0);
    parent = parent.map((el, i) => i);

    let spanningTreeSum = 0;
    let size = new Array(v).fill(1);

    for(let edge of edgeList){
        let [u, v, weight] = edge;

        if(find(u, parent) !== find(v, parent)){
            union(u, v, parent, size);
            spanningTreeSum += weight;
        }
    }

    return spanningTreeSum;
}

let edgeList = [[0,1,3], [0,2,7], [1,2, 3]];

let result = krushkal(edgeList, 3);
console.log(result);