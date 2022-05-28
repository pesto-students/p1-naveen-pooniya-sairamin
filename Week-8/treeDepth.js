function Node() {
  return {
    value: null,
    left: null,
    right: null,
  };
}
function createRandomTree(n, node) {
  let k;
  let curr = node;
  for (let i = 0; i < n; i++) {
    curr = node;
    k = Math.floor(Math.random() * 1025);
    console.log(k);
    if (node.value == null) {
      node.value = k;
      continue;
    }
    while (true) {
      if (k < curr.value) {
        if (curr.left == null) {
          curr.left = new Node();
          curr = curr.left;
          curr.value = k;
          break;
        } else {
          curr = curr.left;
        }
      } else {
        k >= curr.value;
      }
      {
        if (curr.right == null) {
          curr.right = new Node();
          curr = curr.right;
          curr.value = k;
          break;
        } else {
          curr = curr.right;
        }
      }
    }
  }
  return node;
}

function treeRank(node) {
  let str = "";
  let rank = 0,
    front = 0,
    rear = 0;
  let arr = [];
  arr[0] = node;
  rear++;
  while (rear > front) {
    let pr = rear;
    rank++;

    for (let i = front; i < pr; i++) {
      if (arr[i] != null) str += arr[i].value + " ";
      else str += "null ";
    }
    for (let i = front; i < pr; i++) {
      if (arr[i] != null) {
        arr[rear++] = arr[i].left;
        arr[rear++] = arr[i].right;
      }
      front++;
    }
    console.log(`Level ${rank - 1} - ${str}`);
    str = "";
  }

  console.log("Depth is", rank - 1);
}
let node = new Node();
node = createRandomTree(6, node);

console.log("tree");

treeRank(node);
