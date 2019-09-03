/**
 * Dijkstra's Algorithm - Find the shortes path between two verticies
 */

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2, weight})
        this.adjacencyList[vertex2].push({node:vertex1, weight})
    }
    dijkstras(start, end) {
        let distances = {};
        let q = new PriorityQueue();
        let previous = {};
        let current;

        for (let key in this.adjacencyList) {
            distances[key] = (key === start) ? 0 : Infinity;
            q.enqueue(key, distances[key]);
            previous[key] = null;
        }
        while (q.values.length) {
            current = q.dequeue();
            if (current.val === end) return previous;

            this.adjacencyList[current.val].forEach( vertex => {
                let distance = vertex.weight + distances[current.val]
                if (distance < distances[vertex.node]) {
                    distances[vertex.node] = distance;
                    previous[vertex.node] = current.val;
                    q.enqueue(vertex.node, distance);
                }
            });
        }
    }
}

class PriorityQueue {
    constructor () {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort(){
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

let graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A","B", 4)
graph.addEdge("A","C", 2)
graph.addEdge("B","E", 3)
graph.addEdge("C","D", 2)
graph.addEdge("C","F", 4)
graph.addEdge("D","E", 3)
graph.addEdge("D","F", 1)
graph.addEdge("E","F", 1)

console.log(graph.dijkstras('A', 'E'));
console.log('')

