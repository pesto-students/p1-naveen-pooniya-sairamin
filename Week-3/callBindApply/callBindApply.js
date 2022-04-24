function add (){
  return this.a + this.b ;
}
const sum = add (4,6);
console.log(sum);
const sumC = add.call({a:5,b:9});
console.log(sumC);
const sumA = add.apply({a:9, b: 8});
console.log(sumA);
const sumB = add.bind({a: 12, b: 25});
var result =sumB();
console.log(result);
