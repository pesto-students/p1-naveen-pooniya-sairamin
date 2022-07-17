function createArray (n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        if(Math.random()*2>1){
        arr[i]=Math.floor(Math.random()*106);
        } else {
        arr[i]=(-1)*Math.floor(Math.random()*106);
        }
    }
    return arr;
}
function pairDiff (arr,b){
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]-arr[j]===b||arr[j]-arr[i]===b){
                return 1;
            }
        }
    }
    return 0;
}
function caller (){
    let n = Math.floor(Math.random()*106), b=0;
    if(Math.random()*2>1){
        b =Math.floor(Math.random()*106);
        } else {
        b =(-1)*Math.floor(Math.random()*106);
        } 
    let arr = createArray(n);
    console.log("Array = ",arr,"Differance = ", b);
    pairDiff(arr,b)?console.log("Pair Exists"):console.log("Pair Doesn't Exists");
}
caller();