// Heaps are similar to binary search trees, but wuth some different rules
// In a MaxBinaryHeap, parent nodes are always larger than their child nodes. In a
// MinBinaryHeap, parent nodes are always smaller than their chil nodes
// Each parent has at most two nodes
// A binary heap is as compact as possible with the left childresn filled out first

class Node {
    constructor (val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

