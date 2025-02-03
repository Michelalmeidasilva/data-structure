import { describe, it, expect } from 'vitest';

import { LinkedList } from '../list';

describe('LinkedList', () => {
  it('Should instanciate the linked list with no values', () => {
    const list = new LinkedList();

    expect(list.getList()).toBe(null);
  });

  it('Should return isEmpty true when instanced a list with no values', () => {
    const list = new LinkedList();

    expect(list.isEmpty()).toBe(true);
  });

  it('Should instanciate the linked list with values', () => {
    const list = new LinkedList('10');

    expect(list.getList()?.data).toBe('10');
  });

  it('Should return isEmpty false when instanced a list with values', () => {
    const list = new LinkedList('10');

    expect(list.isEmpty()).toBe(false);
  });
});
