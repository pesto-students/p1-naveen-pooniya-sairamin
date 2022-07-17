class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter valid index");

    let node = new Node(element);
    let curr, prev;
    curr = this.head;

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      curr = this.head;
      let it = 0;
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;

      prev.next = node;
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please enter a valid index");

    let curr,
      prev,
      it = 0;
    curr = this.head;
    prev = curr;
    if (index == 0) {
      curr = curr.next;
      this.head = curr;
    } else {
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.size--;
  }
  removeElement(element) {
    let curr = this.head;
    let prev = null;
    let flag = false;
    while (curr != null) {
      if (curr.element === element) {
        flag = true;
        if (prev == null) {
          this.head == curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
      }
      prev = curr;
      curr = curr.next;
    }
    if (flag) {
      return 0;
    } else {
      return -1;
    }
  }
  indexOf(element) {
    let index = 0;
    let curr = this.head;
    while (curr != null) {
      if (curr.element === element) return index;
      index++;
      curr = curr.next;
    }
    return -1;
  }
  isEmpty() {
    return this.size == 0;
  }
  listSize() {
    return this.size;
  }
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
  reverseList() {
    let prev = null,
      next = null,
      count = 0;
    let curr = this.head;

    while (curr != null) {
      count++;
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
   
  }
}
function createList(n) {
  let list = new LinkedList();
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  console.log(arr);
  for (let el of arr) {
    list.add(el);
  }
  
  return list;
}

let list = createList(6);
list.printList();
list.reverseList();
list.printList();
