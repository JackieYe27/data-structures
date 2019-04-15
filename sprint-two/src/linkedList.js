var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

   var arrValues = []; // [{}, {}, {},]
    //console.log(list)
  list.addToTail = function(value) { 
    // just like enqueue      // just like enqueue
    // add element to end of object     // add element to end of object

     // list.tail is null we want to change it since its last value
    list.tail = Node(value);


     arrValues.push(list.tail)
    if (arrValues.length === 1) {
    list.head = list.tail;
  } else {
    list.head = arrValues[0];
  }
};


   list.removeHead = function() {
    //similar to stack.pop      //similar to dequeue
    // delete the very first element from the object      // delete the very first element from the object
    // return the object after its deleted      // list.tail.value = a number want to add it to a variable
    // return value instead of node
    for (var i = 0; i < arrValues.length; i++) {
      var deletedHead = arrValues.shift(0)
      list.head = arrValues[0];

       arrValues.shift(0); // first value i
  }
    return deletedHead.value;
  }; 


   list.contains = function(target) {
    // wants to iterate through the object      // wants to iterate through the object
    // if current value is equal to target then return      // if current value is equal to target then return

      for(var i = 0; i < arrValues.length; i++){
        if(typeof arrValues[i] === 'object'){
          for(var key in arrValues[i]){
            if(arrValues[i][key] === target){
              return true
            } 
          }
      }
    }
    return false    
  };


   return list; 
 }


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
