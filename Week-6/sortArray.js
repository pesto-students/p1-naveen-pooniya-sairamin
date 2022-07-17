function createArray (n){
    let arr = new Array(n);
    for(let i=0; i<n;i++){
        arr[i]=Math.floor(Math.random()*3);
    }
    return arr;
}
function sortArray (arr){
    let lowCount=0,highCount=arr.length-1,temp;
    for(let i=0;i<arr.length;i++){
        if (arr[i]==0){
            temp=arr[lowCount];
            arr[lowCount]=arr[i];
            arr[i]=temp;
            lowCount++;
        }
      
        if (arr[arr.length-i-1]==2){
            temp=arr[highCount];
            arr[highCount]=arr[arr.length-i-1];
            arr[arr.length-i-1]=temp;
            highCount--;
        }
        //console.log(lowCount,highCount,arr);
    }
    console.log(arr);
}
let arr=createArray(10);
console.log(arr);
sortArray (arr);