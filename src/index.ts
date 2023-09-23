class ArrayStack<T = any> {
  #data: T[] = []

  constructor(element: T) {
    this.#data.push(element)
  }

  push(element: T) {
    this.#data.push(element)
  }

  pop() {
    return this.#data.pop()
  }

  peek() {
    return this.#data[this.#data.length - 1]
  }

  isEmpty() {
    return this.#data.length === 0
  }

  size() {
    return this.#data.length
  }
}

const array_stack = new ArrayStack('a')
array_stack.push('b')
array_stack.push('c')

console.log('array_stack =>', array_stack)
console.log('array_stack.peek() =>', array_stack.peek())
console.log('array_stack.pop() =>', array_stack.pop())

console.log('array_stack.isEmpty() =>', array_stack.isEmpty())
console.log('array_stack.size() =>', array_stack.size())
