export class NodeL<T> {
  constructor(public data: T) {}
}

export class LinkedList<T> {
  private readonly head: NodeL<T> | null = null;

  constructor(data?: T) {
    if (data) {
      this.head = new NodeL(data);
    }
  }

  isEmpty() {
    return this.head === null;
  }

  getList() {
    return this.head;
  }
}
