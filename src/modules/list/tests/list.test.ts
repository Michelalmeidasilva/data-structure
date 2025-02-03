import { describe, it, expect } from 'vitest';

import { LinkedList } from '../list';

describe('LinkedList', () => {
  describe('Instance cases', () => {
    it('Should instanciate the linked list with no values', () => {
      const list = new LinkedList();

      expect(list.getHead()).toBe(null);
    });

    it('Should return isEmpty true when instanced a list with no values', () => {
      const list = new LinkedList();

      expect(list.isEmpty()).toBe(true);
    });

    it('Should instanciate the linked list with values', () => {
      const list = new LinkedList('10');

      expect(list.getHead()?.value).toBe('10');
    });

    it('Should return isEmpty false when instanced a list with values', () => {
      const list = new LinkedList('10');

      expect(list.isEmpty()).toBe(false);
    });
  });

  describe('Add cases', () => {
    it('Should add two items with correct prev and next values', () => {
      const list = new LinkedList();

      list.addToFront(10);
      list.addToFront(120);

      expect(list.getHead()?.value).toBe(120);
      expect(list.getHead()?.next?.value).toBe(10);
      expect(list.getHead()?.next?.previous?.value).toBe(120);
    });

    it('Should add a item at head', () => {
      const list = new LinkedList();

      list.addToFront(10);

      expect(list.getHead()?.value).toBe(10);

      expect(list.getHead()?.next).toBe(null);

      expect(list.isEmpty()).toBe(false);
    });

    it('Should add a item at Tail', () => {
      const list = new LinkedList();

      list.addToEnd(10);

      expect(list.getTail()?.value).toBe(10);

      expect(list.getTail()?.previous).toBe(null);

      expect(list.isEmpty()).toBe(false);
    });
  });
});
