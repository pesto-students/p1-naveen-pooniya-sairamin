function vertex() {
  return {
    id: null,
    edges: [],
  };
}
//create Vertices
function createGraph(n) {
  let graph = new Array(n);
  for (let i = 0; i < n; i++) {
    let v = new vertex();
    v.id = i;
    graph[i] = v;
  }
  //console.log(graph);
  return graph;
}

function updateGraph(graph, matrix) {
  let n = graph.length;
  let adjacency = new Array(n);
  for (let i = 0; i < n; i++) {
    adjacency[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      adjacency[i][j] = 0;
    }
  }
  for (let en of matrix) {
    adjacency[en[0]][en[1]] = 1;
    adjacency[en[1]][en[0]] = 1;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (adjacency[i][j] == 1) {
        let n = graph[i].edges.length;
        graph[i].edges[n] = graph[j];
      }
    }
  }
  // console.log(graph);
  //return graph;
}

function pathCheck(graph) {
  let n = graph.length;
  let visited = new Array(n);
  for (let i = 0; i < n; i++) visited[i] = false;
  let stack = [];
  stack.push(graph[0]);
  while (stack.length > 0) {
    let el = stack.pop();

    if (visited[el.id] == false) {
      visited[el.id] = true;
      console.log(el);
      for (let j = 0; j < el.edges.length; j++) {
        if (visited[el.edges[j].id] != true) stack.push(el.edges[j]);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (visited[i] == false) return false;
  }
  return true;
}

let graph1 = createGraph(7);
let graph2 = createGraph(7);
let matrix1 = [
  [0, 1],
  [2, 3],
  [3, 4],
  [1, 4],
  [4, 6],
  [6, 0],
  [2, 5],
  [5, 6],
  [0, 5],
  [3, 6],
];
let matrix2 = [
  [0, 1],
  [2, 3],
  [3, 4],
  [1, 6],
  [4, 5],
  [6, 0],
  [2, 5],
  [5, 3],
];
updateGraph(graph1, matrix1);
updateGraph(graph2, matrix2);
console.log(pathCheck(graph1));
console.log(pathCheck(graph2));
