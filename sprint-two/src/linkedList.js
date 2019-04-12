var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


// add to the back of the array but adding a node


  list.addToTail = function(value) {
    list.tail = Node(value)
  };

// remove the head aka first node passed in
// if list.tail !== null then make list.head == list.tail
// remove the list.head
// return list.head

  list.removeHead = function() {
    if(list.tail !== null) {
      list.head = list.tail;
      var first = list.head;
      delete list.head;
      return first;
    }
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
