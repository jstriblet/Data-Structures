// Stacks - a collection of data, 
// LIFO
// used for undo / redo implememntaions
// routing the history object is treated like a stack
// we can make a simple stack using push and pop in tandom 
// or unshift and shift on an array (push and pop are more efficent)

// a more optimized implementation is to use a linked list

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor () {
        this.first = null
        this.last = null
        this.length = 0
    }
    push(val) {
        let node = new Node (val)
        if (this.length === 0) {
            this.first = node
            this.last = this.first
        } else {
            node.next = this.last
            this.last = node
        }
        this.length++
        return this.length
    }
    pop() {
        if (this.length === 0) return null
        let node = this.last
        this.last = node.next
        node.next = null
        this.length--
        if (this.length === 0) this.first = null
        return node
    }
    print() {
        let arr = []
        let current = this.last
        let i = 0

        while (i < this.length) {
            arr.push(current.val)
            current = current.next
            i++
        }
        console.log(arr)
    }
}

let stack = new Stack()

console.log(stack.push('this'))
console.log(stack.push('is'))
console.log(stack.push('sparta'))
stack.print()
stack.pop()
stack.print()
stack.pop()
stack.print()
stack.pop()
console.log(stack.pop())

