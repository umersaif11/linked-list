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
    }
}
export { LinkedList }