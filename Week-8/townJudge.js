function Vertex(el) {
  return {
    id: el,
    edges: [],
  };
}
function graphUpdate(adacency, graph) {
  let n = graph.length;
  for (let el of adacency) {
    graph[el[0]].edges.push(graph[el[1]]);
  }
  return graph;
}

function createGraph(n) {
  let graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Vertex(i);
  }
  return graph;
}

function townJudge(graph) {
  let n = graph.length;
  let check = new Array(n).fill(true);
  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    if (graph[i].edges.length != 0) {
      for (let i = 0; i < n; i++) visited[i] = false;
      for (let en of graph[i].edges) {
        visited[en.id] = true;
      }
      for (let i = 0; i < n; i++) check[i] = check[i] && visited[i];
    }
  }
  for (let i = 0; i < n; i++)
    if (check[i] == true) {
        console.log(`Town judge is element ${i} of graph`);
        return true;
    }
  return false;
}
let adacency = [
  [0, 1],
  [0, 5],
  [1, 3],
  [1, 5],
  [3, 5],
  [2, 3],
  [2, 5],
  [2, 4],
  //[4, 5],
  [4, 6],
  [6, 5],
  [6, 0],
];
let graph = createGraph(7);
graph = graphUpdate(adacency, graph);
console.log(graph);
if (!townJudge(graph)) console.log("No Town Judge");
