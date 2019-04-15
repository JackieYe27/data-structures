var Tree = function(value) {
	var newTree = []
newTree.value = value;

   newTree.children = [];  // fix me
_.extend(newTree, treeMethods)
  return newTree;
};


 var treeMethods = {};


 treeMethods.addChild = function(value) {
	//add a child node to the newtree obj		//add a child node to the newtree obj]

   //it('should add children to the tree', function() {
  // tree.addChild(5);
  // expect(tree.children[0].value).to.equal(5);
  // });
  // refer to the array and use this
  // want to put the value through tree because value is a number
    // set it equal to the .value and push
  this.children.push(Tree(value));
};


 treeMethods.contains = function(target) {

     for(var i = 0; i < this.children.length; i++){
          var cur = this.children[i]
         // console.log(cur.contains(target))
        if(typeof cur === 'object'){
          for(var key in cur){
            if(cur[key] === target){
              return true
            }
            if (cur.contains(target)) {
              return true;
            }
          }
        }
    }
    return false 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
