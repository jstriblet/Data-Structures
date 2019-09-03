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
        let q = new PriorityQue();
        let distances = {};
        let previous = {};
        let current;

        for (let key in this.adjacencyList) {
            distances[key] = (key === start) ? 0 : Infinity;
            q.enqueue(key, distances[key]);
            previous[key] = null;
        }

        while (q.values.length) {
            // node we are looking at neighbors for
            current = q.dequeue().value;

            if (current === end) {
                let node = end
                let path = []
                while (node !== null) {
                    path.unshift(node) 
                    node = previous[node]
                }
                return path; 
            }
            // for each neighbor to our current node
            this.adjacencyList[current].forEach( vertex => {
                // Calculate the distance from start to the vertex 
                //(length from vertext to current node + length from current node to start)
                let distance = vertex.weight + distances[current]
                if (distance < distances[vertex.node]) {
                    // Update the distance to the vertex
                    distances[vertex.node] = distance;
                    // Update the th enode by which we got to this vertex
                    previous[vertex.node] = current;
                    // Add this node to the priority queue
                    q.enqueue(vertex.node, distance);
                }
            });
        }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQue {
    constructor() {
        this.values = [];
    }
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // insert to the end of the heap and bubble up to proper location
    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        if (this.values.length === 1) return this.values

        let curr = this.values.length - 1;
        let prnt = Math.floor((curr - 1) / 2 );

        while (prnt >= 0 && curr >= 0 && this.values[curr].priority < this.values[prnt].priority) {
            this.swap(this.values, curr, prnt);
            curr = prnt
            prnt = Math.floor((curr-1)/2)
        }
        return this.values
    }
    // replace index where val and sink down / bubble down to where it should reside
    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length) {
            this.values[0] = end;
            this.sinkDown()
        }
        return max
    }
    sinkDown() {
        let curr = 0;
        let child, leftChildIdx, rightChildIdx;

        while (true) {

            leftChildIdx = (curr*2) + 1;
            rightChildIdx = (curr*2) + 2;

            if (rightChildIdx < this.values.length && leftChildIdx < this.values.length) {
                child = this.values[leftChildIdx].priority <= this.values[rightChildIdx].priority ? leftChildIdx : rightChildIdx;
            } else if (leftChildIdx < this.values.length) {
                child = leftChildIdx;
            } else if (rightChildIdx < this.values.length) {
                child = rightChildIdx;
            } else {
                break;
            }

            if (this.values[curr].priority > this.values[child].priority) {
                this.swap(this.values, curr, child);
                curr = child;
            } else {
                break;
            }
        }
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

