var Queue = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    if (count === 0) {
      return undefined;
    }
    var first = Object.keys(storage).shift() // value
    var deleted = storage[first]
    delete storage[first];
    count--
    return deleted;  
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
