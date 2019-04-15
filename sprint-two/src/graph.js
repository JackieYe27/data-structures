// Instantiate a new graph
var Graph = function() {
  this.newNode= {};
  this.nodesArr = [];
  this.edgesArr = []
};

// Add a node to the graph, passing in the node's value.
// want to push the new node value as an array into the nodesArr
Graph.prototype.addNode = function(node) {
 this.newNode.value = node;
 this.nodesArr.push(this.newNode);
 this.edgesArr.push([this.newNode.value]);
 // console.log(this.edgesArr);
 // console.log(this.nodesArr);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.newNode){
    if (this.newNode[key] === node){
      return true;
     }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.newNode.value;
	this.edgesArr.splice(this.node)
	return this.edgesArr;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// if fromNode or toNode has a refence inside of their [] then return true.
// We are checking if [[fromNode, toNode]] kind of thing
// fromNode is a number
// 

Graph.prototype.hasEdge = function(fromNode, toNode) {
		console.log(fromNode)

	for (var i = 0; i < this.edgesArr.length; i++) {
 		if (this.edgesArr[i].includes(toNode) && this.edgesArr[i].includes(fromNode)) {
 			return true;
 		}

 		return false; 
 	}
};

// Connects two nodes in a graph by adding an edge between them.
// adding an edge would just mean making that connection between two nodes
// loop through the array 
// if (this.edgesArr[i] == fromNode) where every this.edgesArr[i] = [nodeValue]
	// then push in the toNode value
// since we have the array of references, we want each element to be a node array which contains another reference
// fromNode ex is the value: '3' 
Graph.prototype.addEdge = function(fromNode, toNode) {
 	for (var i = 0; i < this.edgesArr.length; i++) {
 		// console.log('this issss position 0:' + this.edgesArr[0])
 		// console.log('this is i value:' + this.edgesArr[i])
 		if (this.edgesArr[i][0] === fromNode) {
 			this.edgesArr[i].push(toNode);
 			console.log('this is the connection: ' + this.edgesArr[i])
 			// console.log('the extra' + this.edgesArr[0])
 		}
 		if (this.edgesArr[i][0] === toNode) {
 			this.edgesArr[i].push(fromNode);
 		}
 		// if (this.edgesArr[i] == toNode) {
 		// 	this.edgesArr[i].push(fromNode);
 		// }
 	}
 	console.log('this is the edgeArr: ' + this.edgesArr)
};

// Remove an edge between any two specified (by value) nodes.
// takes out fromNode from toNode array
// loop through the edgesArr
	// if this.edgesArr[i][0] === fromNode
		// loop through the array that contains the edge between fromNode and toNode
			// if this.edgesArr[i] includes toNode
				// then we want to splice the indexof toNode
Graph.prototype.removeEdge = function(fromNode, toNode) {
	for (var i = 0; i < this.edgesArr.length; i++) {
		if (this.edgesArr[i][0] === fromNode) {
			for (var j = 0; j < this.edgesArr[i].length; j++) {
				console.log('this is the inside arr' + this.edgesArr[i][j])
				if (this.edgesArr[i][j] === toNode) {
					this.edgesArr[i].splice(j, 1);
				}
			}
		}
		if (this.edgesArr[i][0] === toNode) {
			for (var k = 0; k < this.edgesArr[i].length; k++) {
				if (this.edgesArr[i][k] === fromNode) {
					this.edgesArr[i].splice(k, 1);
				}
			}
		}
	}

};

// Pass in a callback which will be executed on each node of the graph.
// have something run on each eleement in the nodesArr
// loop through the array
	// apply the cb on each element in the array
// return
Graph.prototype.forEachNode = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


