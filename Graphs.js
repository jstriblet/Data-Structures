/**
 * Graph - a collection of nodes and connections
 * A tree, liked list, are types of graphs
 * Graph are ususally implements with socal networks
 * locations and mapping
 * visual hirarchy
 * file system optimizations
 * peer to peer networking 
 * web crawelers
 * recommendations : "People also watched"...
 * Graph Types: 
 * - Tree - only one path from one node to another
 * - Undeirected Graph - there is no direction implied with an edge (facebook friends)
 * - Directed graph - represented with arrows as edges (twitter followers)
 * - Weighted Graph - edges have assigned values (maps with street lenghts)
 * Graph Terms:
 * - Verted - Node
 * - Edge - connection
 * Graph is typically stored in an Adjacency Matrix or an Adjacency List
 * Adjacency list can be implemented using an array, or object or hashmap of some type
 * Adjacency list - Can take up less space, Faster to iterate over all edges, Can be slopwer to look up specific edge
 * Adjacency Matrix - Takes up more space (in sparse graphs), slower to iterate over all edges, Faster to lookup specif edge
 * 
 * We will implement an Adjacency list because real world data is mostly sparcly conected with edges (think IMDB, facebook)
 */

/**
 * Undirected graph
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    removeVertex(vertex) {
        for (let key of this.adjacencyList[vertex]) {
            this.removeEdge(key, vertex);
        }
        delete this.adjacencyList[vertex]
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    DFTRecursive(start) {
        let result = [];
        let visited = {};

        const DFS = vertex => {
            if(!this.adjacencyList[vertex]) return null
            visited[vertex] = true;
            result.push(vertex);
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    DFS(neighbor);
                }
            }
        }
        DFS(start)
        return result
    }
    DFSIterative(start) {
        let stack = [start]
        let visited = {}
        let result = []
        let current;

        while (stack.length) {
            current = stack.pop();
            if (!visited[current]) {
                visited[current] = true;
                result.push(current)
                this.adjacencyList[current].forEach(element => {
                    stack.push(element)
                });
            }
        }
        return result
    }
    BFS(start) {
        let queue =[start]
        let visited = {}
        let result = []
        let current;

        while (queue.length) {
            current = queue.shift();
            if(!visited[current]) {
                visited[current] = true;
                result.push(current);
                this.adjacencyList[current].forEach(element => {
                    queue.push(element)
                });
            }
        }
    return result
    }
}

g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('San Francisco');
// g.addVertex('Austin');
// g.addVertex('New York');
// g.addEdge('Tokyo', 'San Francisco');
// g.addEdge('Austin', 'San Francisco');
// g.addEdge('Austin', 'Tokyo');
// g.addEdge('New York', 'Austin');
// g.removeEdge('Austin', 'San Francisco');
// g.removeVertex('Austin');

/**
 * Graph Traversal
 * Depth First Search (Traversal)
 * Bredth First Search (Traversal)
 */

// Depth First
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

// console.log(g.DFTRecursive('A'));
// console.log(g.DFSIterative('A'));
// console.log(g.BFS('A'));
// console.log(g.BFS('A'));

