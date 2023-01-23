/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
      const newNode = new Node(val);

      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      
      this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
      let newNode = new Node(val);

      if (this.head === null) {
          this.head = newNode;
      } else {
          newNode.next = this.head;
          this.head = newNode;
      }

      if (this.length === 0) this.tail = this.head;
      this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
      return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
      return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
      if (idx >= this.length || idx < 0) {
          throw new Error('List is empty');
      }

      let cur = this.head;
      let count = 0;
      while (cur !== null && count != idx) {
          count += 1;
          cur = cur.next;
      }
      return cur.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
      if (idx >= this.length || idx < 0) {
          throw new Error('List is empty');
      }

      let cur = this.head;
      let count = 0;
      while (cur !== null && count != idx) {
          count += 1;
          cur = cur.next;
      }
      cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
      if (idx > this.length || idx < 0) {
          throw new Error('List is empty');
      }

      if (idx === 0) return this.unshift(val);
      if (idx === this.length) return this.push(val);

      let cur = this.head;
      let count = 0;
      while (cur !== null && count != idx -1) {
          count += 1;
          cur = cur.next;
      }
      let prev = cur

      let newNode = new Node(val);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
      if (idx >= this.length || idx < 0) {
          throw new Error('List is empty');
      }

      if (idx === 0) {
          let val = this.head.val;
          this.head = this.head.next;
          this.length -= 1;
          if (this.length < 2) this.tail = this.head;
          return val;
      }

      let cur = this.head;
      let count = 0;
      while (cur !== null && count != idx - 1) {
          count += 1;
          cur = cur.next;
      }
      let prev = cur;

      if (idx === this.length - 1) {
          let val = prev.next.val;
          prev.next = null;
          this.tail = prev;
          this.length -= 1;
          return val;
      }

      let val = prev.next.val;
      prev.next = prev.next.next;
      this.length -= 1;
      return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let cur = this.head;
    while (cur) {
      sum += cur.val;
      cur = cur.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
