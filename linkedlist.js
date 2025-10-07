class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //insertAtBeginning
    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }
    //insertAtEnd
    append(value) {
        const newNode = new Node(value);
        let current = this.head;
        while(current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
        this.size++;
    }
    //totalNodes
    getSize() {
        return this.size;
    }
    //firstNode
    getHead() {
        return this.head.value;
    }
    //lastNode
    getTail() {
        let current = this.head;
        while(current.nextNode) {
            current = current.nextNode;
        }
        return current.value;
    }
    //NodeAtIndex
    NodeAt(index) {
        let current = this.head;
    }
}
export { LinkedList }