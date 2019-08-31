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
    BFS(root, val) {
        let queue = new Array();
        let visited = new Array();
        queue.push(root);

        while (queue.length) {
            current = queue.shift()
            visited.push(current.value)
            if (current.value === val) {
                return [current, visited]
            } else {
                if (current.left) queue.push(current.left)
                if (current.right) queue.push(current.right)
            }
        }
        return [undefined, visited]
    }
    // Depth First Search - Pre-order
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

console.log(tree.DFSPre());
console.log('hi');

