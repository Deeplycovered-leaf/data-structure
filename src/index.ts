import ArrayQueue from './ArrayQueue'

const queue = new ArrayQueue<string>()

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')

console.log('queue.dequeue() =>', queue.dequeue())
console.log('queue.dequeue() =>', queue.dequeue())

console.log('queue.peek() =>', queue.peek())

console.log('queue.is_empty() =>', queue.is_empty())
console.log('queue.size =>', queue.size)
