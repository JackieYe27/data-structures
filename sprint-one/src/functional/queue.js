var Queue = function() {
  var someInstance = {};
  var last = 0;
  var first = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // create object[last] = input value
    storage[last] = value;
    // increment last 
    last ++;
  };

  someInstance.dequeue = function() {
    // want to delete last so, if last counter > first oounter
      // then delete storage[first]
      // increment the first counter
      // return deleted
    if (last > first){
      var deleted = storage[first];
      delete storage[first];
      first++;
      return deleted;
    }
  };

  someInstance.size = function() {
    // size would just be the value thats last - first
    return last - first;
  };

  return someInstance;
};
