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
        let count = 0;
        while(count < index) {
            current = current.nextNode;
            count++;
        }
        return current.value;
    }
    //removeLastElement
    pop() {
        let current = this.head;
        let previous;
        while(current.nextNode) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
        this.size--;
    }
    //containsValueInList
    contains(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }
    //valueInListAtIndex
    find(value) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(current.value === value) {
                return `Value found at index ${count}`;
            }
            current = current.nextNode;
            count++;
        }
        return 'Value not found';
    }
    //insertAtIndex
    insertAt(value, index) {
        let current = this.head;
        let previous;
        let count = 0;
        if(index < 0 || index > this.size) return;
        if(index === 0) {
            this.prepend(value);
        }
        while(count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }
        previous.nextNode = new Node(value, current);
        this.size++;
    }
    //removetAtIndex
    removeAt(index) {
        let current = this.head;
        let previous;
        let count = 0;
        if(index < 0 || index > this.size) return;
        if(index === 0) {
            this.head = current.nextNode;
        }
        while(count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }
        previous.nextNode = current.nextNode;
        this.size--;
    }
    //printLinkedList
    toString() {
        let current = this.head;
        let list = '';
        while(current) {
            list += `( ${current.value} ) --> `;
            current = current.nextNode;
        }
        console.log(list += 'null');
        
    }
}
export { LinkedList }