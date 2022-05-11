function createMatrix(m, n) {
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
    //arr[i]=assignValue(arr[i],m,n);
    for (let j = 0; j < n; j++) {
      arr[i][j] = Math.floor(Math.random() * m * n );
    }
  }
  console.log(arr);
  return arr;
}
function spiralMatrix(arr) {
  let m = arr.length;
  let n = arr[0].length;
  let spriralArray = new Array(m * n);
  let top = 0,
    left = 0,
    right = m-1,
    bottom = n-1,
    i=0,j=0,
    direction = 1;
  while(top<=bottom&&left<=right){
    if(direction ==1){
      for(i=left;i<=right;i++){
        spriralArray[j++]=arr[top][i];
        //console.log(top,i);
      }
      top++;
      direction=2;
    }
    if(direction ==2){
      for(i=top;i<=bottom;i++){
        spriralArray[j++]=arr[i][right];
        //console.log(i,right);
      }
      right--;
      direction=3;
    }
    if(direction ==3){
      for(i=right;i>=left;i--){
        spriralArray[j++]=arr[bottom][i];
        //console.log(bottom,i);
      }
      bottom--;
      direction=4;
    }
    if(direction ==4){
      for(i=bottom;i>=top;i--){
        spriralArray[j++]=arr[i][left];
        //console.log(i,left);
      }
      left++;
    }
    direction=(direction+1)%4;
  }
  return spriralArray;
}
let arr = createMatrix(4, 4);
console.log(spiralMatrix(arr));
