const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
    this.prev = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.queue) {
      this.queue = newNode;
      this.prev = newNode;
    } else {
      this.prev.next = newNode;
      this.prev = newNode;
    }
  }

  dequeue() {
    const value = this.queue.value;
    if (!this.queue.next) {
      this.queue.value = null;
      return value;
    }
    this.queue.value = this.queue.next.value;
    this.queue.next = this.queue.next.next;
    return value;
  }
}

module.exports = {
  Queue
};
