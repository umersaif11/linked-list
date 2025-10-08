import { LinkedList } from "./linkedlist.js"

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(50);
list.toString();
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.NodeAt(2));
list.pop();
list.toString();
console.log(list.contains(20));
console.log(list.find(30));
list.insertAt(10,1);
list.toString();
list.removeAt(1);
list.toString();

const listTwo = new LinkedList();
listTwo.append("dog");
listTwo.append("cat");
listTwo.append("parrot");
listTwo.append("hamster");
listTwo.append("snake");
listTwo.append("turtle");

listTwo.toString();