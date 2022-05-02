const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let curr = list,
    prev = null,
    next = list.next;

  while (true) {
    if (curr.value === k) {
      if (curr.next === null) {
        prev.next = null;
        break;
      } else {
        if (next.value === k) {
          curr.value = next.next.value;
          curr.next = next.next.next;
        } else {
          curr.value = next.value;
          curr.next = next.next;
        }
      }
    }

    if (curr.next === null) { break; }
    prev = curr;
    curr = curr.next;
    next = curr.next;
  }

  return list;
}

module.exports = {
  removeKFromList
};
