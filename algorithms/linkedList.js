// create basic singly linkedlist functionality

class Node {
  constructor(val) {
    this.val = val,
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // adds a new value to the linked list
  add(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    // append new item to tail.next (which by reference is the last node in the head, therfore appending to the head)
    // then overwrite tail with the new node (doesn't overwrite tail because we're updating the reference (ie changing where tail points to) instead of modifying an existing reference)
    this.tail.next = node;
    this.tail = node;
    return
    
  }
}

const myLL = new LinkedList();
console.log(myLL);
myLL.add('first');
myLL.add('second');
myLL.add('third');


console.log(myLL.head);
console.log(myLL.tail);