function memoize (fn)
{
  const cache = new Map();
  return function (...args){
    const key= args.toString();
    if(cache.has(key)){
      console.log("memo used");
      return cache.get(key);
    }
    else {
      cache.set(key,fn(...args));
      console.log("calculated")
      return cache.get(key);
    }
  }
}

function add(a,b){

  return a+b;
}
const memoizeAdd= memoize(add);
memoizeAdd(100,100);
memoizeAdd(100);
memoizeAdd(100,200);
memoizeAdd(100,100);
memoizeAdd(100,200);
