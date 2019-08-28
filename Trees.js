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
    insert(value){
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
    /**
     * Find something in a tree
     * @param {number} value that you are searching for
     */
    find(value) {
        let current = this.root
        while(current) {
            if (current.value === value) return true;
            if (value < current.value) current = current.left;
            if (value > current.value) current = current.right;
        }
        return false
    }
}

let tree = new BinarySearchTree();
 tree.root = new Node(10);
 tree.root.right = new Node(15);
 tree.root.left = new Node(7);
 tree.root.left.right = new Node(9);

// console.log(tree.insert(44));
// console.log(tree.insert(45));
// console.log(tree.insert(46));
// console.log(tree.insert(4));
// console.log(tree.find(456));

