function getNumber(time, callback) {
  setTimeout(() => {
    let t = Math.floor(Math.random() * 100);
    return callback(t);
  }, time);
}
class promise {
  constructor(type) {
    this.resolve = function (message) {
      console.log("Success " + message);
    };
    this.reject = function (message) {
      console.log("Failure " + message);
    };
    this.fullfill = function (message) {
      console.log("Congrats " + message);
    };
    this.time = 200;
  }
}
function promised(p) {
  getNumber(p.time, (t) => {
    let fullfilled = false;
    console.log(t);
    //implemented %2 to check working %5 replaced for final push
    if (t % 5 != 0) {
      fullfilled = true;
      p.resolve("Resolved");
    } else {
      fullfilled = true;
      p.reject("rejected");
    }
    if (fullfilled === true) p.fullfill("promise fullfilled");
  });
}
/*
promised(
  (message) => {
    console.log("success " + message);
  },
  (message) => {
    console.log("failure " + message);
  },
  (message)=>{
      console.log("congrats" + message);
  },
  200
);
*/
let a = new promise();
promised(a);
