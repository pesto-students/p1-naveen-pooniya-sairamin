class stackQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.size = 0;
  }
  enqueue(ele) {
    this.stack1.push(ele);
    this.size++;
  }
  dequeue() {
    for (let i = 0; i < this.size; i++) {
      this.stack2.push(this.stack1.pop());
    }
    let k = this.stack2.pop();
    this.size--;
    for (let i = 0; i < this.size; i++) {
      this.stack1.push(this.stack2.pop());
    }
    return k;
  }
  printQueue(){
    let str = "";
    for(let en of this.stack1){
        str+= en + " ";
    }
    console.log(str);
  }
}
let queue = new stackQueue;
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(8);
queue.printQueue();
console.log(queue.dequeue());
queue.enqueue(9);
queue.printQueue();

