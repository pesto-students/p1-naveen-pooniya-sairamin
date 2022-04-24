function stackImp () {
  const items =[];
  function createStack() {
      return {
          push(item) { items.push(item); },
          pop() { return items.pop(); }
      }
  }
  return createStack();
}

const stack=stackImp();
console.log(stack);
stack.push(10);
stack.push(5);
var a=stack.pop();// => 5
console.log(a);
console.log(stack.items);
stack.items= [10,100,1000];
stack.push(125);
a= stack.pop();
console.log(a);
a= stack.pop();
console.log(a);
// Encapsulationbroken!
/*function createStack() {
  // Write your code here...
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined*/
