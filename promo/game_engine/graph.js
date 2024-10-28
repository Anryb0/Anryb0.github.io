class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2); // добавляем v2 в список смежности v1
            this.adjacencyList[v2].push(v1); // добавляем v1 в список смежности v2 (если граф неориентированный)
        }
    }

    getNeighbors(vertex) {
        return this.adjacencyList[vertex] || [];
    }
}