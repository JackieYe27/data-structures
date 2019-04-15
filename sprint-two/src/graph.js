// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
// just add to the node object
// this will look like {{1:1}, {2:2}, {3:3}}
Graph.prototype.addNode = function(node) {
 this.nodes[node] = node;
 console.log(this.nodes[node] = node)
 console.log("this is the nodes object with addNode: " + this.nodes)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// check to see if the nodes object we created has the given node
	// if it does, return true if not return false
Graph.prototype.contains = function(node) {
  if (this.nodes[node] === node) {
  	return true;
  } else {
  	return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for (var key in this.nodes) {
		if (this.nodes[key] === node) {
			delete this.nodes[key];
		}
	}
	for (var key in this.edges) {
		console.log('this is edges[key]' +this.edges[key])
		if (this.edges[key][0] === node) {
			delete this.edges[key];
		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// From add edge we know that the values in the object start from 0-1
	// 0 = fromNode, 1 = toNode
// loop through the object
// check if the positions equal fromNode or toNode
	// if so return true else return false

Graph.prototype.hasEdge = function(fromNode, toNode) {
	for (var key in this.edges) {
		console.log('this is the first value: ' + this.edges[key][0])
		console.log('this is the second value: ' + this.edges[key][1])
		if ((this.edges[key][0] === fromNode && this.edges[key][1] === toNode) || 
			(this.edges[key][0] === toNode && this.edges[key][1] === fromNode)) {
			return true;
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
// now all we are using the edges object
// set the key in the object to equal from node and the value to an array with both fromNode and toNode
	// like how I first thought but modify and make it look cleaner
// that way there will be a reference to both in one object property
// this will look like {1: [1, 2]}
Graph.prototype.addEdge = function(fromNode, toNode) {
 	this.edges[fromNode] = [fromNode, toNode];
 	console.log('this is the edges object: ' + this.edges)
};

// Remove an edge between any two specified (by value) nodes.
// same concept as hasEdge
// loop through the object
// check if the positions equal fromNode or toNode
	// instead of returning we would delete

Graph.prototype.removeEdge = function(fromNode, toNode) {
	for (var key in this.edges) {
		if ((this.edges[key][0] === fromNode && this.edges[key][1] === toNode)  || 
			(this.edges[key][0] === toNode && this.edges[key][1] === fromNode)){
			delete this.edges[fromNode];
		}
	}
};

// Pass in a callback which will be executed on each node of the graph.
// have something run on each eleement in the nodesArr
// loop through the array
	// apply the cb on each element in the array
// return
Graph.prototype.forEachNode = function(cb) {
	for (var node in this.nodes) {
		cb(this.nodes[node]);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


