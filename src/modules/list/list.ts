/**
 *
 */
export class NodeL<T> {
  public next: NodeL<T> | null = null;
  public previous: NodeL<T> | null = null;

  constructor(public value: T) {}
}

/**
 *
 * Linked List:
 *
 * Best:
 *   Read: O(1)
 *   Insert: O(1) ( Head or Tail)
 *   Delete: O(1)
 * Worst:
 *   Read: O(n) - traverse list
 *   Insert: O(n) - traverse list
 *   Delete: O(n) - traverse list
 */
export class LinkedList<T> {
  private head: NodeL<T> | null = null;
  private tail: NodeL<T> | null = null;

  constructor(data?: T) {
    if (data) {
      this.head = new NodeL(data);
      this.tail = new NodeL(data);
    }
  }

  addToFront(data: T) {
    const newNode = new NodeL(data);
    newNode.next = this.head;

    if (this.head) {
      this.head.previous = newNode;
    }

    if (!this.head) {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  addToEnd(data: T) {
    const newNode = new NodeL(data);
    newNode.previous = this.tail;

    if (this.tail) {
      this.tail.next = newNode;
    }

    if (!this.tail) {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  isEmpty() {
    return this.head === null;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}
