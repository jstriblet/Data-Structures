// Queues - data structure where the first piece of data in is the first 
// piece of data out.
// waiting in line... used when uploaded / downloading a file
// print Queue, ram processes, background task, etc...
// we can use unshift with pop, or push with shift

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor () {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let node = new Node (val)
        if (this.size === 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size++
        return this.size
    }
    dequeue() {
        if (this.size === 0) return null
        let node = this.first
        this.first = node.next
        node.next = null
        this.size--
        if (this.size === 0) this.first = null
        return node
    }
    print() {
        let arr = []
        let current = this.first
        let i = 0

        while (i < this.size) {
            arr.push(current.val)
            current = current.next
            i++
        }
        console.log(arr)
    }
}

let queue = new Queue()
console.log(queue.enqueue('this'))
console.log(queue.enqueue('is'))
console.log(queue.enqueue('sparta'))
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
console.log(queue.dequeue())

