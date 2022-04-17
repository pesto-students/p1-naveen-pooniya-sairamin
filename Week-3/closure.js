function createIncrement(){
  let count=0;
  function increment(){
    count++;
  }
  let message=`Count is ${count}`;
  function log() {
    console.log(message);
  }
  return[increment,log];
}
const[increment,log] =createIncrement();//Message created with value 0
increment();//Count incremented but message not changed
increment();//Count incremented but message not changed
increment();//Count incremented but message not changed
log();// message is logged with the initialized value.
