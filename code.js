function depthFirstSearch(graph, startNode, targetNode) {
    // A function to check if a node is the target
    function isTarget(node) {
        return node === targetNode;
    }

    // A recursive function to explore the graph
    function explore(node, visited, path) {
        // Mark the current node as visited
        visited[node] = true;

        // Add the current node to the path
        path.push(node);

        // If the current node is the target, we're done
        if (isTarget(node)) {
            return true;
        }

        // Explore unvisited neighbors
        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                // Recursively explore the neighbor
                if (explore(neighbor, visited, path)) {
                    return true;  // If a path to the target is found, stop exploring
                }
            }
        }

        // If no path is found from the current node, backtrack
        path.pop();
        return false;
    }

    // Initialize data structures
    const visitedNodes = {};
    const currentPath = [];

    // Start exploring from the provided start node
    const found = explore(startNode, visitedNodes, currentPath);

    // Return the path if the target is found; otherwise, return an empty array
    return found ? currentPath : [];
}


