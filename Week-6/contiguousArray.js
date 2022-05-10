function createArray() {
  let n =10// Math.floor(Math.random()*1000000+1);
  //console.log(n);
  let arr = new Array(n);
  //console.log(arr.length);
  for (i = 0; i < arr.length; i++) {
    if (Math.floor(Math.random() * 10) % 2 == 0) {
      arr[i] = Math.floor(Math.random() * 10 + 1); //1000 instead of 10
    } else {
      arr[i] = -1 * Math.floor(Math.random() * 10 + 1); //1000 instead of 10
    }
  }
  console.log(arr);
  return arr;
}
function contiguousSubarray(arr) {
  let maxSum = 0,max=0;
  let contArr =[];
  let i=0;
  for (let en of arr) {

    if(maxSum+en>=0){
    contArr[i]=maxSum+en;
    maxSum+=en;
    i++;
    }
    else {
        maxSum=0;
        contArr[i]=maxSum;
        i++;
    }
    if(maxSum>max){
        max=maxSum;
    }
    }

  console.log(contArr);
  return (max);
}
let arr = createArray();
console.log(contiguousSubarray(arr));
