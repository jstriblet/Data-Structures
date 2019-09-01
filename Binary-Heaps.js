// Heaps are similar to binary search trees, but wuth some different rules
// In a MaxBinaryHeap, parent nodes are always larger than their child nodes. In a
// MinBinaryHeap, parent nodes are always smaller than their chil nodes
// Each parent has at most two nodes
// A binary heap is as compact as possible with the left childresn filled out first
// Binary Heaps are used to implement Priority Queues, they are also used quite a bit
// with graph travertal algorithms
// When represented as an array, 
// the children of any node can be found at the index of (2n+1 & 2n+2)

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // insert to the end of the heap and bubble up to proper location
    insert(val) {
        this.values.push(val);
        let curr = this.values.length - 1;
        let prnt = Math.floor((curr - 1) / 2 );
        let temp;

        while (this.values[curr] > this.values[prnt] && prnt >= 0) {
            this.swap(this.values, curr, prnt);
            curr = prnt
            prnt = Math.floor((curr-1)/2)
        }
        return this.values
    }
    // replace index where val and sink down / bubble down to where it should reside
    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length) {
            this.values[0] = end;
            this.sinkDown()
        }
        return max
    }
    sinkDown() {
        let curr = 0
        let child = this.values[1] >= this.values[2] ? 1 : 2

        while (this.values[curr] < this.values[child]) {
            this.swap(this.values, curr, child);
            curr = child;
            let leftChildIdx = (curr*2) + 1;
            let rightChildIdx = (curr*2) + 2;

            if (rightChildIdx < this.values.length && leftChildIdx < this.values.length) {
                child = this.values[leftChildIdx] >= this.values[rightChildIdx] ? leftChildIdx : rightChildIdx
            } else if (leftChildIdx < this.values.length) {
                child = leftChildIdx
            } else if (rightChildIdx < this.values.length) {
                child = rightChildIdx
            }
        }
    }
}

let heap = new MaxBinaryHeap()

console.log(heap.insert(20));
console.log(heap.insert(50));
console.log(heap.insert(33));
console.log(heap.insert(47));
console.log(heap.insert(12));
console.log(heap.insert(100));

// console.log(heap.extractMax()); 
// console.log(heap.extractMax()); 
// console.log(heap.extractMax()); 
// console.log(heap.extractMax()); 
// console.log(heap.extractMax()); 

//Priority Queeu