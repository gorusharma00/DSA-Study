class Graph{
    constructor(noOfVertices){
        this.v = noOfVertices;
        this.adjlist = new Array(this.v)

        for(let i = 0; i < this.v; i++){
            this.adjlist[i] = [];   // here originaly you should use linked list 
        }
    }

    addEdge(v1, v2, biDir = true){
        this.adjlist[v1].push(v2);
        if(biDir){
            this.adjlist[v2].push(v1);
        }
    }

    display(){
        console.log(this.adjlist)
    }
}

const g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 6);
g.addEdge(6, 5);
g.addEdge(1, 5);
g.addEdge(1, 2);
g.addEdge(2, 4);
g.addEdge(2, 3);
g.addEdge(4, 3);

g.display();