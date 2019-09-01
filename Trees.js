// Tree - non linear parent child relationship 
// A parent can only point to a child
// Root - is the top most node in the tree
// Child - A node directly connected to another node when moving away from the root node
// Parent - the converse notion of a child
// Sibling - A group of nodes with the same parent
// Leaf - A node with no children
// Edge - The connection between one node and another
// Binary Search tree - a tree where evey parent can have at most two children
// and every left child is less than the parent, every node to the right is greater than the parent

/**
 * 
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}

class BinarySearchTree {
    constructor (){
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) return this.root = newNode;
        let currentNode = this.root;

        while (newNode.value !== currentNode.value) {
            if (newNode.value > currentNode.value) {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                } else {
                    currentNode = currentNode.right;
                }
            } else if (newNode.value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                break;
            }
        }
        return this
    }
    find(value) {
        let current = this.root
        while(current) {
            if (current.value === value) return true;
            if (value < current.value) current = current.left;
            if (value > current.value) current = current.right;
        }
        return false
    }
    // Breadth First Search
    BFS() {
        let queue = new Array();
        let visited = new Array();
        queue.push(this.root);

        while (queue.length) {
            current = queue.shift()
            visited.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return visited
    }
    // Depth First Search - Pre-Order
    DFSPre() {
        let visited = [];
        let current = this.root;

        const traverse = node => {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
    // Depth First Search - Post-Order
    DFSPost() {
        let visited = [];
        let current = this.root;

        const traverse = node => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    }
    // Depth First Search - In-Order
    DFSIn() {
        let visited = [];
        let current = this.root;

        const traverse = node => {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
tree.insert(2);
tree.insert(1);

console.log(tree.DFSIn());
console.log('hi');

// When to use BFS vs DFS...
// The time complexity is the same, however the space complexity will be different.
// If the tree is wider than it is deep, then using depth first search 
// will limit the memory usage to be minimal because you only need to keep track of
// one branch of the tree at a time (recursive function) as opposed to keep track of all the queued
// up nodes by going across the trees width and insering the left and right nodes.

// When to use PreOrder vs PostPrder vs InOrder
// InOrder, when traversing the entire tree, you will get back and array
// or whatever structure you populate with the exactly order, 
// from left to right that the tree is in
// PreOrder - Usefull when you want to clone a tree/ flatten it out and recreate it
// from the srealized structure startes with the root of the tree
// they are very easy to switch between
