const graph = new Graph();


graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addVertex('7');
graph.addVertex('8');
graph.addVertex('9');
graph.addVertex('10');
graph.addVertex('11');
graph.addVertex('12');
graph.addVertex('13');
graph.addVertex('14');
graph.addVertex('15');
graph.addVertex('16');


graph.addEdge('1', '2');
graph.addEdge('2', '3');
graph.addEdge('3', '4');
graph.addEdge('4', '5');
graph.addEdge('5', '6');
graph.addEdge('6', '7');
graph.addEdge('7', '8');
graph.addEdge('8', '9');
graph.addEdge('9', '10');
graph.addEdge('11', '12');
graph.addEdge('12', '13');
graph.addEdge('14', '15');
graph.addEdge('15', '16');

console.log(graph.adjacencyList);