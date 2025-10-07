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
    prepend(value) {
        const newNode = new Node(value, this.head);
    }
}
export { LinkedList }