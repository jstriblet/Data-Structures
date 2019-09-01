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
    insert(val) {
        this.values.push(val);
        let curr = this.values.length - 1,
            prnt = Math.floor((curr - 1) / 2 ),
            temp;

        while (this.values[curr] > this.values[prnt] && prnt >= 0) {
            temp = this.values[curr];
            this.values[curr] = this.values[prnt];
            this.values[prnt] = temp;
            
            curr = prnt
            prnt = Math.floor((curr-1)/2)
        }
        return this.values
    }
}

let heap = new MaxBinaryHeap()

console.log(heap.insert(20));
console.log(heap.insert(50));
console.log(heap.insert(33));
console.log(heap.insert(47));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.insert(15));
console.log(heap.insert(10));
console.log(heap.insert(100));
console.log(heap.insert(1)); 



