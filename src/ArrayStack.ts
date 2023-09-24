import type { Stack } from './types'

export default class ArrayStack<T = any> implements Stack<T> {
  #data: T[] = []

  push(element: T) {
    this.#data.push(element)
  }

  pop() {
    return this.#data.pop()
  }

  peek() {
    return this.#data[this.#data.length - 1]
  }

  is_empty() {
    return this.#data.length === 0
  }

  get size() {
    return this.#data.length
  }
}
const array_stack = new ArrayStack()
array_stack.push('a')
array_stack.push('b')
array_stack.push('c')
console.log('array_stack =>', array_stack)
console.log('array_stack.peek() =>', array_stack.peek())
console.log('array_stack.pop() =>', array_stack.pop())
console.log('array_stack.isEmpty() =>', array_stack.is_empty())
console.log('array_stack.size() =>', array_stack.size)
