/** 
 * PriorityQueue - A data structure where every element has a priority
 * Elements with higher priorities are served before elements with lower priorities
 * uduslly, all we care about is the top level elemtnt, the minimum or maximum thing
 */

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

let priority = new PriorityQue()

console.log(priority.enqueue('pay bills',10));
console.log(priority.enqueue('love Ashley',6));
console.log(priority.enqueue('enjoy life',1));
console.log(priority.enqueue('be kind',4));
console.log(priority.enqueue('hang out with firends',12));
console.log(priority.enqueue('work',55));
console.log(priority.dequeue());
console.log(priority.dequeue());
console.log(priority.dequeue());

/** 
 * The Big O for binary heaps are great for insertion and deletion
 * really good (O(logn)) for great for quick comparisons 
 * the big of of search for a binary heap is (O(n))
 * heaps are always balanced, 
 * heaps can be represented in flattened arrays
 */
