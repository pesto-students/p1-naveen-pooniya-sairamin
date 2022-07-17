class Node {
  constructor(ele) {
    this.data = ele;
    this.next = null;
  }
}
function detectLoop(node) {
  let slow = node,
    fast = node;
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      console.log("loop exist");
      //removeLoop(slow, node);
      return true;
    }
  }
  return false;
}
/*
function removeLoop(loop, head) {
  let pt1 = loop,
    pt2 = loop;
  //find the loop lenght
  let k = 1;
  while (pt1 != pt2.next) {
    pt2 = pt2.next;
    k++;
  }
  console.log(k);
  pt1 = head;
  pt2 = head;
  //shifting pt2 to kth node
  for (; k > 0; k--) {
    pt2 = pt2.next;
  }
  //finding loop start
  while (pt1 != pt2) {
    pt1 = pt1.next;
    pt2 = pt2.next;
  }
  //breaking the loop
  while (pt2.next != pt1) {
    pt2 = pt2.next;
  }
  pt2.next = null;
  console.log(head);
  console.log("loop removed");
}
*/
let head = new Node(31);
head.next = new Node(45);
head.next.next = new Node(75);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(14);
//orginal list
console.log(detectLoop(head));
//looping the list
head.next.next.next.next = head.next;
console.log(detectLoop(head));
