class Node {
    constructor(value) {
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}

 node = new Node(10);
 node.right = new Node(15);
 node.left = new Node(7);
 node.left.right = new Node(9);

const BFS = function(root, val){
    let queue = new Array();
    let visited = new Array();
    queue.push(root);

    while (queue.length) {
        current = queue.shift()
        if (current.value === val) {
            return [current, visited]
        } else {
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
            visited.push(current.value)
        }
    }
    return [undefined, visited]
}

console.log(node)
console.log(node)