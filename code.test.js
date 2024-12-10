const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

// Define test cases
const testCases = [
    {
        name: 'Empty Graph',
        graph: {},
        startNode: 'A',
        targetNode: 'B',
        expectedResult: []
    },
    {
        name: 'Graph with No Connections',
        graph: {
            'A': [],
            'B': [],
            'C': []
        },
        startNode: 'A',
        targetNode: 'B',
        expectedResult: []
    },
    {
        name: 'Graph with One Path',
        graph: {
            'A': ['B'],
            'B': ['C'],
            'C': ['D'],
            'D': []
        },
        startNode: 'A',
        targetNode: 'D',
        expectedResult: ['A', 'B', 'C', 'D']
    },
    {
        name: 'Graph with No Path',
        graph: {
            'A': ['B'],
            'B': [],
            'C': ['D'],
            'D': []
        },
        startNode: 'A',
        targetNode: 'D',
        expectedResult: []
    },
    {
        name: 'Graph with Complex Paths',
        graph: {
            'A': ['B', 'C'],
            'B': ['D'],
            'C': ['E'],
            'D': ['F'],
            'E': ['F'],
            'F': []
        },
        startNode: 'A',
        targetNode: 'F',
        expectedResult: ['A', 'B', 'D', 'F'] 
    }
];

// Run test cases
for (const testCase of testCases) {
    const { name, graph, startNode, targetNode, expectedResult } = testCase;
    console.log(`Running test: ${name}`);

    try {
        const result = depthFirstSearch(graph, startNode, targetNode);
        console.log(`Result: ${result.length > 0 ? result.join(' -> ') : 'No path found'}`);
        console.log(`Expected: ${expectedResult.length > 0 ? expectedResult.join(' -> ') : 'No path found'}`);

        // Assert that the result matches the expected result
        assert.deepStrictEqual(result, expectedResult, `${name} failed: Result does not match expected.`);

        console.log(`${name} passed.\n`);
    } catch (error) {
        console.error(`${name} failed with error: ${error.message}`);
        process.exit(1);
    }
}

console.log('All tests passed successfully.');
