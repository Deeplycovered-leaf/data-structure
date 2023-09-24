import type { Queue } from './types'

export default class ArrayQueue<T = any> implements Queue<T> {
  #data: T[] = []

  enqueue(item: T) {
    this.#data.push(item)
  }

  dequeue() {
    return this.#data.shift()
  }

  peek() {
    return this.#data[0]
  }

  is_empty() {
    return this.#data.length === 0
  }

  get size() {
    return this.#data.length
  }
};
