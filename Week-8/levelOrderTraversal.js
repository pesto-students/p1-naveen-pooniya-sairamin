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
      k = Math.floor(Math.random() * 1000);
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
        } else if (k >= curr.value) {
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
  
  function levelOrderTraversal(node) {
    let result = [];
    let level = [],
      front = 0,
      rear = 0;
    let arr = [];
    arr[0] = node;
    rear++;
    level.push(arr[0].value);
    result.push(level);
    while (rear > front) {
      let pr = rear;
  
      for (let i = front; i < pr; i++) {
        level = [];
        if (arr[i] != null) {
          if (arr[i].left != null) {
            arr[rear++] = arr[i].left;
            level.push(arr[rear - 1].value);
          }
          if (arr[i].right != null) {
            arr[rear++] = arr[i].right;
            level.push(arr[rear - 1].value);
          }
          if (level.length > 0) result.push(level);
        }
        front++;
      }
    }
  
    return result;
  }
  let node = new Node();
  node = createRandomTree(6, node);
  
  console.log("tree");
  
  console.log(levelOrderTraversal(node));
  