var Stack = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  // Add the given value into storage w/ a key of current count 
  someInstance.push = function(value) {
    count ++;
    storage[count] = value;
  };
 
  /* Check to see if stack is empty
    if so, return undefined
  Decrement count
  Save element at top of stack to a var (to later return)
  Delete that element from storage
  Return saved element
  */

  someInstance.pop = function() {
    if (count === 0) {
      return undefined;
    }
     var deleted = storage[count]
     delete storage[count];
     count--
     return deleted;
  };


  // return count;

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
