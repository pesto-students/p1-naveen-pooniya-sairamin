function createArray (n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        if(Math.floor(Math.random()*2)<1){
        arr[i]=Math.floor(Math.random()*1000);
        }
        else{
            arr[i]=(-1)*Math.floor(Math.random()*1000);
        }
    }
    return arr;
}
function sum3Brute (arr,num) {
    let n= arr.length;
    let match = 0, C =Infinity;
    for(let i= 0;i<n-2;i++){
        for (let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++){
                if(Math.abs((arr[i]+arr[j]+arr[k])-num)<C){
                    match = arr[i]+arr[j]+arr[k];
                    C=Math.abs((arr[i]+arr[j]+arr[k])-num);
                    //console.log(i,j,k);
                }
            }
        }
    }
    return(match);
    
}// O(n^3) O(1)

let arr = createArray(8);
console.log(arr);
console.log(sum3Brute(arr,-600));