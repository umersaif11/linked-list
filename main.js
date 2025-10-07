import { LinkedList } from "./linkedlist.js"

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.NodeAt(2));
list.pop();
console.log(list.getTail());