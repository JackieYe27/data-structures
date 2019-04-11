class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 /* Capitalize your function name to indicate to others that it is intended to be run with the keyword new
	Use the keyword new when instantiating your class
	Use the keyword this in your constructor
	Explicitly declare a class method named constructor
	Declare all other class methods within the class declaration
*/	

  constructor() {
  	this.storage = {};
  	this.first = 0;
  	this.last = 0;
  }
  
  enqueue(value) {
  	this.storage[this.last] = value;
	this.last++;
  };

  dequeue() {
  if (this.last > this.first) {
    var deleted = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return deleted;
  }
};

  size() {
    return this.last - this.first;
  };

}
