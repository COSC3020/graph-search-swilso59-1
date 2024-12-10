
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

const adjList1 = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['B', 'H'],
    'F': ['C'],
    'G': ['C'],
    'H': ['E']
};

const adjList2 = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['B', 'H'],
    'F': ['C'],
    'G': ['C'],
    'H': []
};

const startNode = 'G';
const targetNode = 'E';

function runTest(adjList, testName) {
    const path = depthFirstSearch(adjList, startNode, targetNode);
    console.log(`Test: ${testName}`);
    // Validate and display the result
    if (path.length > 0 && path[path.length - 1] === targetNode) {
        console.log(`Path from ${startNode} to ${targetNode}: ${path.join(' -> ')}`);
    } else {
        console.log(`No valid path found from ${startNode} to ${targetNode}`);
    }
    // Verify the result and fail the test if incorrect
    if (path.length === 0 || path[path.length - 1] !== targetNode) {
        console.error(`${testName} test has failed: No path found.`);
        process.exit(1); // Exit with non-zero status code to indicate test failure
    }
}

// Run test for adjList
runTest(adjList1, "adjList1");

// Run test for adjList2
runTest(adjList2, "adjList2");
