function doTask1(string, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Doing ${string} in ${time} milliseconds`);
      resolve();
    }, time);
  });
}
function doTask2(string, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Making ${string} in ${time} milliseconds`);
      resolve();
    }, time);
  });
}
function doTask3(string, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Thinking about ${string} for ${time} milliseconds`);
      resolve();
    }, time);
  });
}

async function performTasks(task, timeTaken) {
  await doTask1(task[1], timeTaken[1]);
  await doTask2(task[2], timeTaken[2]);
  await doTask3(task[3], timeTaken[3]);
}

let tasks = ["Example", "exercise", "bread", "assignments"];
let timeTaken = [0, 3000, 1000, 2000];
performTasks(tasks, timeTaken);

function* generateTasks(task, timeTaken) {
  yield doTask1(task[1], timeTaken[1]);
  yield doTask2(task[2], timeTaken[2]);
  yield doTask3(task[3], timeTaken[3]);
}
const genT = generateTasks(tasks, timeTaken);
genT
  .next()
  .value.then(() => {
    genT.next();
  })
  .then(() => {
    genT.next();
  });
