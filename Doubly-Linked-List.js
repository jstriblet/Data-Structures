class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.length) return undefined
        const poppedNode = this.tail 
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length --
        return poppedNode
    }
    shift() {
        if(!this.head) return undefined 
        const poppedNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = poppedNode.next
            this.head.prev = null
            poppedNode.next = null
        }
        this.length--
        return poppedNode
    }
    unshift (val) {
        let node = new Node(val)
        if(!this.length) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node            
        }
        this.length++
        return this
    }
    get (idx) {
        if(idx >= this.length || idx < 0) return undefined
        let node, count
            if (idx > this.length/2) {
                node = this.tail
                count = this.length - 1
                while(idx !== count) {
                    node = node.prev
                    count--
                }
            } else {
                node = this.head
                count = 0
                while(idx !== count) {
                    node = node.next
                    count++
                } 
            }
        return node
    }
    set (idx, val) {
        let node = this.get(idx)
        if (!node) return false
        node.val = val
        return true
    }
    insert(idx, val) {
        if(idx > this.length || idx < 0) return false
        if(idx === 0) return !!this.unshift(val)
        if(idx === this.length) return !!this.push(val)

        let prevNode = this.get(idx-1)
        let newNode = new Node(val)
        let nextNode = this.get(idx)

        prevNode.next = newNode
        newNode.next = nextNode
        newNode.prev = prevNode
        nextNode.prev = newNode
        this.length++

        return true
    }
    remove(idx) {
        if(idx === 0) return this.shift(idx)
        if(idx === this.length-1) return this.pop(idx)
        let node = this.get(idx)
        if(!node) return undefined
        let prevNode = node.prev
        let nextNode = node.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        node.next = null
        node.prev = null

        this.length--
        return node
    }
    print() {
        let arr = new Array()
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList();

list.push('Telbirts')
list.push('Striblet')
list.push('Jonathan')
list.push(99)

console.log(list.remove(1));
list.print()
