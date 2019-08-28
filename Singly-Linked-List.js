class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.length) return undefined
        let current = this.head
        let prevNode = current
        while (current.next) {
            prevNode = current
            current = current.next
        }
        this.tail = prevNode
        this.tail.next = null
        this.length--
        if (!this.length) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if(!this.length) return undefined
        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if(!this.length) {
            this.tail = null
        }
        return oldHead
    }
    unshift(val) {
        let newHead = new Node (val)
        if (!this.head) {
            this.head = newHead
            this.tail = this.head
        } else {
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
        return this
    }
    get(idx) {
        if (idx > this.length || idx < 0) return undefined
        let counter = 0
        let currentNode = this.head

        while (counter !== idx) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    set(idx, val) {
        let node = this.get(idx)
        if (!node) return false
        node.val = val
        return true
    }
    insert(idx, val) {
        if (idx > this.length || idx < 0) return false
        if (idx === this.length) return !!this.push(val)
        if (idx === 0) return !!this.unshift(val)

        let prevNode = this.get(idx-1)
        let oldNode = this.get(idx)
        let newNode = new Node(val)
        newNode.next = oldNode
        prevNode.next = newNode
        this.length++
        return true
    }
    remove(idx) {
        if (idx >= this.length || idx < 0) return false
        if (idx === 0) return this.shift()
        if (idx === this.length-1) return this.pop()

        let prevNode = this.get(idx-1)
        let node = this.get(idx)
        let nextNode = node.next
        prevNode.next = nextNode

        this.length--
        return true

    }
    reverse() {
        let temp = this.tail
        this.tail = this.head
        this.head = temp

        let prev = null
        let current = this.tail
        let next
        
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
    // Recursion Soloution 
    // reverse(pre = null, curr = this.head) {
    //     if (curr.next) {
    //     this.reverse(curr, curr.next)
    //     } else {
    //     this.tail = this.head;
    //     this.head = curr;
    //     }
    //     curr.next = pre;
    // }
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

let list = new SinglyLinkedList()
list.push(99)
list.push('hello')
list.push('darkness')
list.push('my')
list.push('old')
list.push('friend')

list.print()
console.log(list.reverse())
list.print()
