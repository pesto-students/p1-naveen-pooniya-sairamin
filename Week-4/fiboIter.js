const Fib = (n) => ({
[Symbol.iterator]: () => {
    let i = 1;
    let first =0; second=0; 
    return {
        next: () => {
            if ( i++<=n) {
                [first,second]=[second,(first+second)|| 1];
                return { value:first, done:false}
            }
            else {
                return {done:true}
            }
        }
    }
}
});

console.log("The Fibonacci Series is:");
for (let en of Fib(10)) {
    console.log(en);
}